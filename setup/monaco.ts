// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {

  monaco.editor.getModel

  console.log('monaco.editor.getModels()', monaco.editor.getModels())

  // monaco.editor.EditorOptions.readOnly.defaultValue = true

  // monaco.editor.EditorOptions.lineNumbers.applyUpdate()
  // (property) monaco.editor.IEditorOptions.lineNumbers?: monaco.editor.LineNumbersType

  console.log('document', document)

  // monaco.editor.create(document.getElementById('container') as HTMLElement, {
  //   value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
  //   language: 'typescript',
  
  //   lineNumbers: 'on',
  //   roundedSelection: false,
  //   scrollBeyondLastLine: false,
  //   readOnly: false,
  //   theme: 'vs-dark'
  // })
  
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },

  }
})
