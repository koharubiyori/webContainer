zipName='dist.zip'
webDirPath='./app'

if [ -f $zipName ];then rm $zipName; fi
if [ -d $webDirPath ];then rm $webDirPath -r; fi
rz

if [ -f $zipName ];then
  unzip $zipName -d $webDirPath
else
  echo "请上传名为“${zipName}”的压缩包文件！"
fi