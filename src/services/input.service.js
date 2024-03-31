const { Option, Input } = require('../models');

async function createOption(optionData, inputId) {
    return Option.create({
        label: optionData.label,
        value: optionData.value,
        inputId
    });
}

async function createOptions(options, inputId) {
    return Promise.all(options.map(async (option) => createOption(option, inputId)))
}
async function deleteOptionsByInputId(inputId) {
    return Option.destroy({ where: { inputId } });
}

async function createInput(input, formId) {
    const { options, ...inputData } = input;
    return Input.create({
        ...inputData, formId
    }).then(async (newInput) => {
        if (options && options.length)
            await createInputs(options, newInput.id)
        return newInput
    })
}
async function createInputs(inputs, formId) {
    return Promise.all(inputs.map(async (input) => createInput(input, formId)))
}
async function deleteInputsByFormId(formId) {
    return Input.destroy({ where: { formId } });
}

module.exports = {
    createInputs,
    createOptions,
    deleteInputsByFormId
};
