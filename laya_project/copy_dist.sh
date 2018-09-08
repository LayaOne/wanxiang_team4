rm -rf ./dist
mkdir dist
mkdir -p ./dist/libs/
mkdir -p ./dist/res/
mkdir -p ./dist/res/atlas/
mkdir -p ./dist/comp/
sh cpui.sh
cp index.html ./dist/
cp layaUI.max.all.js ./dist/
cp bundle.js ./dist/
cp libs/all_lib.min.js ./dist/libs/
cp -rf ./comp/* ./dist/comp/
cp -rf ./res/* ./dist/res/
cp -rf ./dist/* ../../xhackerweb/wanxiang_team4/
cd ../../xhackerweb/
sh complie.sh