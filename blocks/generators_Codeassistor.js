Blockly.JavaScript['Aray'] = function (block) {
  var Type = block.getFieldValue('Type');
  var name = block.getFieldValue('Arayname');
  var value_CODE = block.getFieldValue('value_CODE');
  var value_CODE_Split = value_CODE.split(',');
  var filter = {
      int: x=>parseInt(x),
      String: x=> `"${x}"`,
      float:x=>parseFloat(x)
  }
  let code = Type + " " + name + "["+value_CODE_Split.length+"] = {" + value_CODE_Split.map(x=>filter[Type](x)).join(',') + "};";
  return code;
};



Blockly.JavaScript['value_of'] = function (block) {
  let code = '';
  var arr1 = block.getFieldValue('arr1');
  var index2 = Blockly.JavaScript.valueToCode(block, 'at', Blockly.JavaScript.ORDER_ATOMIC)
  code = arr1 +"["+index2+"]";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['map'] = function (block) {
  var map_value = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
  var fromLow = Blockly.JavaScript.valueToCode(block, 'fromLow', Blockly.JavaScript.ORDER_ATOMIC);
  var fromHigh = Blockly.JavaScript.valueToCode(block, 'fromHigh', Blockly.JavaScript.ORDER_ATOMIC);
  var toLow = Blockly.JavaScript.valueToCode(block, 'toLow', Blockly.JavaScript.ORDER_ATOMIC);
  var toHigh = Blockly.JavaScript.valueToCode(block, 'toHigh', Blockly.JavaScript.ORDER_ATOMIC);

  let code = `map(${map_value},${fromLow},${fromHigh},${toLow},${toHigh})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

