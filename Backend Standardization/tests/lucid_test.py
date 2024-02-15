import unittest
import pandas as pd

class LucidCSVTest(unittest.TestCase):
    def test_diagram_1(self):
        test_data = pd.read_csv('test_diagram_1.csv')
        expected = [
            
        ]

        result = add_numbers(3, 5)
        self.assertEqual(result, 8)

if __name__ == '__main__':
    unittest.main()
