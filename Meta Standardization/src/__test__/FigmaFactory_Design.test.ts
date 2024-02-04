import Design from "../models/Design/Design"
import SolidPaint from "../models/Design/SolidPaint"
import { FrameDesign } from "../models/FrameNode"
import { RGB } from "../models/Design/RGBA"
import { GradientPaint } from "../models/Design/GradientPaint"
import { ColorStop } from "../models/Design/ColorStop"
import Shadow from "../models/Design/Shadow"
import Vector from "../models/Layout/Vector"
import { Blur } from "../models/Design/Blur"
import Border from "../models/Design/Border"
import LTRB_Edges from "../models/Design/LTRB_Edges"
import FigmaFactory from "../models/FigmaFactory"

type TestCase = {
  testData: FrameDesign,
  expectedData: Design
}


const testCase1: TestCase = {
  testData: {
    fills: [
      new SolidPaint('SOLID', {r: 10, g: 10, b: 10}),
    ],
    strokes: [
      new SolidPaint('SOLID', {r: 200, g: 100, b: 30}),
    ],
    effects: [
      new Shadow("INNERSHADOW", {r:1, g:2, b:3, a:4}, new Vector(5,10), 20, 30)
    ],
    strokeWeight: 66,
    topLeftRadius: 12,
    topRightRadius: 21,
    bottomRightRadius: 31,
    bottomLeftRadius: 13
  },
  expectedData: new Design(
    [ new SolidPaint('SOLID', {r: 10, g: 10, b: 10}), ],
    new Border(
      66,
      [ new SolidPaint('SOLID', {r: 200, g: 100, b: 30}), ],
      new LTRB_Edges(12, 21, 31, 13)
    ),
    [ new Shadow("INNERSHADOW", {r:1, g:2, b:3, a:4}, new Vector(5,10), 20, 30) ],
    []
  )
}

const testCase2: TestCase = {
  testData: {
    fills: [
      new GradientPaint("GRADIENT_LINEAR", {}, [new ColorStop(100, {r:50, g:50, b:50, a:50})])
    ],
    strokes: [
      new GradientPaint("GRADIENT_DIAMOND", {}, [new ColorStop(100, {r:56, g:51, b:54, a:58})])
    ],
    effects: [
      new Blur('BACKGROUND_BLUR', 20)
    ],
    strokeWeight: 69,
    topLeftRadius: 12,
    topRightRadius: 21,
    bottomRightRadius: 31,
    bottomLeftRadius: 13
  },
  expectedData: new Design(
    [ new GradientPaint("GRADIENT_LINEAR", {}, [new ColorStop(100, {r:50, g:50, b:50, a:50})]) ],
    new Border(
      69,
      [ new GradientPaint("GRADIENT_DIAMOND", {}, [new ColorStop(100, {r:56, g:51, b:54, a:58})]) ],
      new LTRB_Edges(12, 21, 31, 13)
    ),
    [],
    [ new Blur('BACKGROUND_BLUR', 20) ]
  )
}

const testCase3: TestCase = {
  testData: {
    fills: [
      new SolidPaint('SOLID', {r: 10, g: 10, b: 10}),
      new SolidPaint('SOLID', {r: 100, g: 100, b: 100}),
      new GradientPaint("GRADIENT_LINEAR", {}, [new ColorStop(100, {r:50, g:50, b:50, a:50})]),
      new GradientPaint("GRADIENT_ANGULAR", {}, [new ColorStop(100, {r:50, g:50, b:50, a:50})])
    ],
    strokes: [
      new SolidPaint('SOLID', {r: 200, g: 100, b: 30}),
      new SolidPaint('SOLID', {r: 160, g: 130, b: 11}),
      new GradientPaint("GRADIENT_DIAMOND", {}, [new ColorStop(100, {r:56, g:51, b:54, a:58})]),
      new GradientPaint("GRADIENT_RADIAL", {}, [new ColorStop(100, {r:56, g:51, b:54, a:58})])
    ],
    effects: [
      new Shadow("DROPSHADOW", {r:1, g:2, b:3, a:4}, new Vector(5,10), 20, 30),
      new Blur('LAYER_BLUR', 20)
    ],
    strokeWeight: 69,
    topLeftRadius: 12,
    topRightRadius: 21,
    bottomRightRadius: 31,
    bottomLeftRadius: 13
  },
  expectedData: new Design(
    [
      new SolidPaint('SOLID', {r: 10, g: 10, b: 10}),
      new SolidPaint('SOLID', {r: 100, g: 100, b: 100}),
      new GradientPaint("GRADIENT_LINEAR", {}, [new ColorStop(100, {r:50, g:50, b:50, a:50})]),
      new GradientPaint("GRADIENT_ANGULAR", {}, [new ColorStop(100, {r:50, g:50, b:50, a:50})])
    ],
    new Border(
      69,
      [
        new SolidPaint('SOLID', {r: 200, g: 100, b: 30}),
        new SolidPaint('SOLID', {r: 160, g: 130, b: 11}),
        new GradientPaint("GRADIENT_DIAMOND", {}, [new ColorStop(100, {r:56, g:51, b:54, a:58})]),
        new GradientPaint("GRADIENT_RADIAL", {}, [new ColorStop(100, {r:56, g:51, b:54, a:58})])
      ],
      new LTRB_Edges(12, 21, 31, 13)
    ),
    [new Shadow("DROPSHADOW", {r:1, g:2, b:3, a:4}, new Vector(5,10), 20, 30)],
    [ new Blur('LAYER_BLUR', 20) ]
  )
}


describe('FigmaFactory.DesignConstructor', () => {
  // Test Case 1
  it('Test Case 1', () => {
    const computed = FigmaFactory.DesignConstructor(testCase1.testData)
    const expected = testCase1.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 2
  it('Test Case 2', () => {
    const computed = FigmaFactory.DesignConstructor(testCase2.testData)
    const expected = testCase2.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 3
  it('Test Case 3', () => {
    const computed = FigmaFactory.DesignConstructor(testCase3.testData)
    const expected = testCase3.expectedData
    expect(computed).toEqual(expected)
  })
})