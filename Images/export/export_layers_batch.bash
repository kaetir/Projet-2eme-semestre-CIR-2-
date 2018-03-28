#!/bin/bash
# by Arnaud Ramey (arnaud.a.ramey@gmail.com)
if [ $# -ne 4 ] && [ $# -ne 5 ]
then
  echo "Export all layers chosen by the user of a SVG file into PNG, then convert in a GIF file."
  echo
  echo "    Synopsis: $0 [SVGFILE]     [LAYERSGROUPS]           [DELAY] [OUTGIF]    [INKSCAPEARG]"
  echo "    Example:  $0 drawing.svg   bg+01,bg+02,bg+03,bg+04  10      drawing.gif"
  echo "SVGFILE is the SVG to export. It is not modified."
  echo "LAYERSGROUPS is a comma-separated list of groups of layers."
  echo "  Each group of layers describes layers that must be exported together."
  echo "  Inside a group, layers are separated with a '+'."
  echo "DELAY is in 1/100 of second => multiply by 10 to convert in milliseconds"
  echo "INKSCAPEARG is not compulsoory but can be used eg with \"-d 300\" "
  echo "  to send the png resolution or any other inkscape switch through"
  exit
fi

INSVGORIG=$1
LAYERSGROUPS=$2
DELAY=$3
OUTGIF=$4
INKSCAPEARG=$5
OUTFILEPREFIX=`mktemp /tmp/export_layers_XXXXX`


INSVG=$OUTFILEPREFIX.svg
echo " *** export_layers_batch.bash: infile:'$INSVGORIG', outfile:'$OUTGIF'"
rm $OUTFILEPREFIX* -rf

# make all layers invisible
cp $INSVGORIG $INSVG
sed -i 's,style="display:inline",style="display:none",g' $INSVG

set_layer_visible() { # 1: file, 2: layer name
  # https://stackoverflow.com/questions/7837879/xmlstarlet-update-an-attribute
  #~ echo "set_layer_visible($2@$1)"
  xmlstarlet edit --inplace --update "//*[@inkscape:label=\"$2\"]/@style" --value "display:inline" $1
} # end set_layer_visible()

# for all userlayers
FRAMEIDX=0
IFS=','; for CURRENTLAYERSGROUP in $LAYERSGROUPS; do
  CURRENTSVG=${OUTFILEPREFIX}_$FRAMEIDX.svg
  CURRENTOUTPNG=${OUTFILEPREFIX}_$FRAMEIDX.png
  echo "  -> Exporting frame $FRAMEIDX: '$CURRENTLAYERSGROUP@$INSVGORIG' -> '$CURRENTOUTPNG'"

  # make a copy of INSVG for current frame
  cp $INSVG $CURRENTSVG

  # for all layers in CURRENTLAYERSGROUP
  IFS='+'; for LAYERID in $CURRENTLAYERSGROUP; do
    set_layer_visible $CURRENTSVG $LAYERID
  done

  # export CURRENTSVG
  inkscape --export-area-page --without-gui --export-png=$CURRENTOUTPNG $INKSCAPEARG $CURRENTSVG --export-background-opacity=0 >> /dev/null
  #convert $CURRENTOUTPNG -flatten $CURRENTOUTPNG

  # increment frame idx
  FRAMEIDX=$(( $FRAMEIDX + 1 ))
done # for LAYERIDS

# make gif
INPNGS=`ls $OUTFILEPREFIX*.png`
INPNGS="$OUTFILEPREFIX*.png"
echo " *** Converting $INPNGS -> $OUTGIF..."
convert -loop -1 -delay $DELAY $INPNGS $OUTGIF

#cleaning
rm $OUTFILEPREFIX* -rf

echo "Done, file '$OUTGIF' generated"
