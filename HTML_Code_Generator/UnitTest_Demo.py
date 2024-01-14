# UnitTest_Demo.py

import unittest

def add_numbers(a, b):
    return a + b

class TestMyModule(unittest.TestCase):
    def test_add_numbers(self):
        self.assertEqual(add_numbers(1, 2), 4)
        self.assertEqual(add_numbers(-1, 1), 0)
        self.assertEqual(add_numbers(0, 0), 0)

if __name__ == '__main__':
    unittest.main()
