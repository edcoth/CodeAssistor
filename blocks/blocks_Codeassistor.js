Blockly.Blocks['Aray'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Array :")
      .appendField(new Blockly.FieldDropdown([["Int", "int"], ["Float", "float"], ["String", "String"]]), "Type")
      .appendField("  ")
      .appendField(new Blockly.FieldTextInput(""), "Arayname")
      .appendField("[] = {")
      .appendField(new Blockly.FieldTextInput(""), "value_CODE")
      .appendField("}");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};




Blockly.Blocks['value_of'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Value of")
      .appendField(new Blockly.FieldTextInput(""), "arr1")
    //.appendField("At")
    this.appendValueInput("at")
      .setCheck("Number")
      .appendField(" at:");
    //.appendField(new Blockly.FieldTextInput(""), "index2")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['map'] = {
  init: function () {
    this.appendValueInput("variable")
      .setCheck("Number")
      .appendField("map(variable :");
    this.appendValueInput("fromLow")
      .setCheck("Number")
      .appendField(", fromLow :");
    this.appendValueInput("fromHigh")
      .setCheck("Number")
      .appendField(", fromHigh :");
    this.appendValueInput("toLow")
      .setCheck("Number")
      .appendField(", toLow :");
    this.appendValueInput("toHigh")
      .setCheck("Number")
      .appendField(", toHigh :");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("EX val = map(val, 0, 1023, 0, 255);");
    this.setHelpUrl("");
  }
};

