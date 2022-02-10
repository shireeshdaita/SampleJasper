function onClickJasper()
{
  var custmetrics = [{"onSale":true,"prodName":"iPad 16 GB","prodPrice":450.0,"salePrice":400.0,"prodSKU":"1231sdf2","rating":4.5}];
KNYMetricsService.sendCustomMetrics("frmProduct", custmetrics);
}