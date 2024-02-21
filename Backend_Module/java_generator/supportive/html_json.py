from bs4 import BeautifulSoup
import json

# Read the HTML file
with open('html.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Extract the information and create a list of dictionaries
data = []
for td_tag in soup.find_all('td', class_='colFirst'):
    a_tag = td_tag.find('a', href=True)
    if a_tag:
        link = a_tag['href']
        # Extract the word after 'javax.persistence/'
        keyword = link.split('javax.persistence/')[-1].split('.')[0]

        # Extract the word after '"> ' and before '</a>&'
        start_str = '"> '
        end_str = '</a>&'
        start_index = link.find(start_str) + len(start_str)
        end_index = link.find(end_str)
        additional_word = link[start_index:end_index]

        # Concatenate the words
        result_word = f'{keyword} {additional_word}'

        # Create a dictionary for each entry
        entry = {'result_word': result_word}
        data.append(entry)

# Write the extracted data to a JSON file
with open('output.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=2)

print("Data extracted and written to output.json")

