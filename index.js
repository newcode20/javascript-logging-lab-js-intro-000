const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')
  it('calls console.error("HALP!")', done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()
    
