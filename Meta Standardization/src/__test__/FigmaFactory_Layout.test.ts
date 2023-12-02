import FigmaFactory from '../models/FigmaFactory'
import AbsoluteLayout from '../models/Layout/AbsoluteLayout'
import Axis from '../models/Layout/Axis'
import Layout from '../models/Layout/Layout'
import LinearLayout from '../models/Layout/LinearLayout'
import Vector from '../models/Layout/Vector'
import { FrameLayout, FrameNode } from '../models/FrameNode'

type TestCase = {
  testData: FrameLayout,
  expectedData: Layout
}

const testCase1: TestCase = {
  testData: {
    x: 1,
    y: 2,

    layoutMode: 'NONE',
    primaryAxisAlignItems: 'MIN',
    counterAxisAlignItems: 'MIN',
    itemSpacing: 5
  },
  expectedData: {
    mode: 'ABSOLUTE',
    structure: new AbsoluteLayout(
      new Vector(1,2)
    )
  }
}
const testCase2: TestCase = {
  testData: {
    x: 1,
    y: 2,
  
    layoutMode: 'HORIZONTAL',
    primaryAxisAlignItems: 'MIN',
    counterAxisAlignItems: 'SPACE_BETWEEN',
    itemSpacing: 5
  },
  expectedData: {
    mode: 'LINEAR',
    structure: new LinearLayout(
      new Axis('HORIZONTAL','MIN',5),
      new Axis('VERTICAL','SPACE_BETWEEN',5)
    )
  }
}
const testCase3: TestCase = {
  testData: {
    x: 1,
    y: 2,
  
    layoutMode: 'HORIZONTAL',
    primaryAxisAlignItems: 'SPACE_BETWEEN',
    counterAxisAlignItems: 'MIN',
    itemSpacing: 5
  },
  expectedData: {
    mode: 'LINEAR',
    structure: new LinearLayout(
      new Axis('HORIZONTAL','SPACE_BETWEEN',5),
      new Axis('VERTICAL','MIN',5)
    )
  }
}
const testCase4: TestCase = {
  testData: {
    x: 1,
    y: 2,
  
    layoutMode: 'VERTICAL',
    primaryAxisAlignItems: 'CENTER',
    counterAxisAlignItems: 'MAX',
    itemSpacing: 5
  },
  expectedData: {
    mode: 'LINEAR',
    structure: new LinearLayout(
      new Axis('VERTICAL','CENTER',5),
      new Axis('HORIZONTAL','MAX',5)
    )
  }
}
const testCase5: TestCase = {
  testData: {
    x: 1,
    y: 2,
  
    layoutMode: 'VERTICAL',
    primaryAxisAlignItems: 'MAX',
    counterAxisAlignItems: 'CENTER',
    itemSpacing: 5
  },
  expectedData: {
    mode: 'LINEAR',
    structure: new LinearLayout(
      new Axis('VERTICAL','MAX',5),
      new Axis('HORIZONTAL','CENTER',5)
    )
  }
}

describe('FigmaFactory.LayoutConstructor', () => {
  // Test Case 1
  it('Absolute Layout with x,y Vector', () => {
    const computed = FigmaFactory.layoutConstructor(testCase1.testData)
    const expected = testCase1.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 2
  it('LinearLayout with Horizontal, Min PrimaryAxis & Vertical, Space_Between CountarAxis', () => {
    const computed = FigmaFactory.layoutConstructor(testCase2.testData)
    const expected = testCase2.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 3
  it('LinearLayout with Horizontal, Space_Between PrimaryAxis & Vertical, Min CountarAxis', () => {
    const computed = FigmaFactory.layoutConstructor(testCase3.testData)
    const expected = testCase3.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 4
  it('LinearLayout with Vertical, Center PrimaryAxis & Horizontal, Max CountarAxis', () => {
    const computed = FigmaFactory.layoutConstructor(testCase4.testData)
    const expected = testCase4.expectedData
    expect(computed).toEqual(expected)
  })
  // Test Case 5
  it('LinearLayout with Vertical, Max PrimaryAxis & Horizontal, Center CountarAxis', () => {
    const computed = FigmaFactory.layoutConstructor(testCase5.testData)
    const expected = testCase5.expectedData
    expect(computed).toEqual(expected)
  })
})