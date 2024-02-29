"use strict";
/* import Layout from "../models/Layout/Layout"
import { FrameBox } from "../types/FrameNode"
import BoxModel from "../models/BoxModel/BoxModel"
import Dimension from "../models/BoxModel/Dimension"
import LTRB from "../models/BoxModel/LTRB"
import FigmaFactory from "../factories/FigmaFactory"

type TestCase = {
  testData: FrameBox,
  expectedData: BoxModel
}

const testCase1: TestCase = {
  testData: {
    width: 200,
    height: 100,
  
    paddingLeft: 5,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 20,
    
    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'AUTO',
    counterAxisSizingMode: 'AUTO',

    parentLayoutMode: 'NONE',
    parentNodeType: 'NONE',
    layoutGrow: 0,
    layoutAlign: 'STRETCH'
  },
  expectedData: {
    width: new Dimension(200,'AUTO','NONE'),
    height: new Dimension(100,'AUTO','NONE'),
    padding: new LTRB(5,10,15,20)
  }
}
const testCase2: TestCase = {
  testData: {
    width: 250,
    height: 150,
  
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 25,

    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'FIXED',
    counterAxisSizingMode: 'FIXED',

    parentLayoutMode: 'HORIZONTAL',
    parentNodeType: 'FRAME',
    layoutGrow: 1,
    layoutAlign: 'STRETCH'
  },
  expectedData: {
    width: new Dimension(250,'STRETCH','PERCENTAGE'),
    height: new Dimension(150,'STRETCH','PERCENTAGE'),
    padding: new LTRB(10,15,20,25)
  }
}
const testCase3: TestCase = {
  testData: {
    width: 250,
    height: 150,
  
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 25,

    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'FIXED',
    counterAxisSizingMode: 'FIXED',

    parentLayoutMode: 'HORIZONTAL',
    parentNodeType: 'FRAME',
    layoutGrow: 0,
    layoutAlign: 'INHERIT'
  },
  expectedData: {
    width: new Dimension(250,'FIXED','PIXEL'),
    height: new Dimension(150,'FIXED','PIXEL'),
    padding: new LTRB(10,15,20,25)
  }
}
const testCase4: TestCase = {
  testData: {
    width: 250,
    height: 150,
  
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 25,

    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'FIXED',
    counterAxisSizingMode: 'FIXED',

    parentLayoutMode: 'VERTICAL',
    parentNodeType: 'FRAME',
    layoutGrow: 0,
    layoutAlign: 'STRETCH'
  },
  expectedData: {
    width: new Dimension(250,'STRETCH','PERCENTAGE'),
    height: new Dimension(150,'FIXED','PIXEL'),
    padding: new LTRB(10,15,20,25)
  }
}
const testCase5: TestCase = {
  testData: {
    width: 250,
    height: 150,
  
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 25,

    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'FIXED',
    counterAxisSizingMode: 'FIXED',

    parentLayoutMode: 'VERTICAL',
    parentNodeType: 'FRAME',
    layoutGrow: 0,
    layoutAlign: 'INHERIT'
  },
  expectedData: {
    width: new Dimension(250,'FIXED','PIXEL'),
    height: new Dimension(150,'FIXED','PIXEL'),
    padding: new LTRB(10,15,20,25)
  }
}
const testCase6: TestCase = {
  testData: {
    width: 250,
    height: 150,
  
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 25,

    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'FIXED',
    counterAxisSizingMode: 'FIXED',

    parentLayoutMode: 'VERTICAL',
    parentNodeType: 'NONE',
    layoutGrow: 0,
    layoutAlign: 'STRETCH'
  },
  expectedData: {
    width: new Dimension(250,'FIXED','PIXEL'),
    height: new Dimension(150,'FIXED','PIXEL'),
    padding: new LTRB(10,15,20,25)
  }
}
const testCase7: TestCase = {
  testData: {
    width: 250,
    height: 150,
  
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 25,

    layoutMode: 'HORIZONTAL',
    primaryAxisSizingMode: 'FIXED',
    counterAxisSizingMode: 'FIXED',

    parentLayoutMode: 'VERTICAL',
    parentNodeType: 'FRAME',
    layoutGrow: 1,
    layoutAlign: 'STRETCH'
  },
  expectedData: {
    width: new Dimension(250,'STRETCH','PERCENTAGE'),
    height: new Dimension(150,'STRETCH','PERCENTAGE'),
    padding: new LTRB(10,15,20,25)
  }
}


describe('FigmaFactory.BoxModelConstructor', () => {
  // Test Case 1
  it('Test Case 1', () => {
    const computed = FigmaFactory.BoxModelConstructor(testCase1.testData)
    const expected = testCase1.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 2
  it('Test Case 2', () => {
    const computed = FigmaFactory.BoxModelConstructor(testCase2.testData)
    const expected = testCase2.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 3
  it('Test Case 3', () => {
    const computed = FigmaFactory.BoxModelConstructor(testCase3.testData)
    const expected = testCase3.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 4
  it('Test Case 4', () => {
    const computed = FigmaFactory.BoxModelConstructor(testCase4.testData)
    const expected = testCase4.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 5
  it('Test Case 5', () => {
    const computed = FigmaFactory.BoxModelConstructor(testCase5.testData)
    const expected = testCase5.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 6
  it('Test Case 6', () => {
    const computed = FigmaFactory.BoxModelConstructor(testCase6.testData)
    const expected = testCase6.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 7
  it('Test Case 7', () => {
    const computed = FigmaFactory.BoxModelConstructor(testCase7.testData)
    const expected = testCase7.expectedData
    expect(computed).toEqual(expected)
  })
}) */ 
