import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const llmNote = defineNoteConfig({
  dir: '大语言模型学习',
  link: '/大语言模型学习',
})

const mlNote = defineNoteConfig({
  dir: '机器学习',
  link: '/机器学习',
})

const cppNote = defineNoteConfig({
  dir: 'c++-primer-plus',
  link: '/c++-primer-plus',
})

const leetcodeNote = defineNoteConfig({
  dir: 'leetcode',
  link: '/leetcode',
})

const thesisNote = defineNoteConfig({
  dir: '毕业设计',
  link: '/毕业设计',
})

const thinoNote = defineNoteConfig({
  dir: 'thino',
  link: '/thino',
})

const transformerNote = defineNoteConfig({
  dir: 'transformer',
  link: '/transformer',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    llmNote,
    mlNote,
    cppNote,
    leetcodeNote,
    thesisNote,
    thinoNote,
    transformerNote
  ],
})
