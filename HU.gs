function huFormat(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var aba = sheet.getActiveSheet().getName();
  var col = sheet.getActiveCell().getColumn();
  var lock = LockService.getScriptLock();
  if(aba == "Base Coletor" && col == 2){
    var scan = sheet.getActiveCell().getValue();
    if(scan.indexOf("{") == 0){
      scan = JSON.parse(scan);
      var linha = sheet.getActiveCell().getRow();
      var hu = scan.legacy_id;
      sheet.getSheetByName("Base Coletor").getRange(linha,2).setValue(hu);
    }
  }
  lock.waitLock(2000);
}