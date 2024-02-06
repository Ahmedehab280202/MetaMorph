import sys
import pandas as pd
import models.LucidCSV as LucidCSV
import models.ClassNode as ClassNode
import models.JavaClassTemplate as JavaClassTemplate

def process_csv(file_path):
    diagram_csv = pd.read_csv(file_path)
    class_csv = LucidCSV.ClassCSV.seriesConvertor(diagram_csv.loc[1])
    class_node = ClassNode.ClassNode.csvConvertor(class_csv)
    java_class_template = JavaClassTemplate.classNodeConvertor(class_node= class_node)
    with open('generated_file.java', "w") as java_file:
        java_file.write(java_class_template.codeStr)

    input("Press Enter to exit...")
    sys.exit(0)

if __name__ == "__main__":
    # Check if a file path is provided as a command-line argument
    if len(sys.argv) != 2:
        print("Usage: python script.py <csv_file_path>")
        sys.exit(1)

    # Extract the file path from the command-line argument
    csv_file_path = sys.argv[1]

    # Call the function to process the CSV file
    process_csv(csv_file_path)
