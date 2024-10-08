import CodeSnippet from "../../components/codeSnippet";

const WebScraper = () => {
    const webScraperCode = {
        python:`
        import requests
        from bs4 import BeautifulSoup

        def scrape_website(url):
            response = requests.get(url)
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Pretty print the parsed HTML
            print("Prettified HTML:")
            print(soup.prettify())
            
            # Find the title tag
            title = soup.title
            print("Title of the webpage:")
            print(title.string)
            
            # Find all paragraph tags
            paragraphs = soup.find_all('p')
            print("All paragraph texts:")
            for p in paragraphs:
                print(p.get_text())
            
            # Find the first anchor tag
            first_anchor = soup.find('a')
            print("First anchor tag:")
            print(first_anchor)
            
            # Find all anchor tags with a specific class
            specific_anchors = soup.find_all('a', class_='specific-class')
            print("All anchor tags with class 'specific-class':")
            for a in specific_anchors:
                print(a)
            
            # Find an element by id
            element_by_id = soup.find(id='specific-id')
            print("Element with id 'specific-id':")
            print(element_by_id)

        url = 'https://example.com'
        scrape_website(url)
        `
    };

    return (
        <div className="max-w-xs sm:max-w-lg lg:max-w-4xl mx-5">
            <div className="my-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900">
                <h1 className="text-4xl font-bold mb-4">Web Scraper</h1>
                <div className="mt-8">
                    <h2 className="text-4xl font-semibold mb-2">Use Case</h2>
                    <p className="mb-4">
                        Web scraping is the process of extracting data from websites. This can be useful for a variety of purposes, such as data analysis, market research, and more.
                    </p>
                    <h2 className="text-4xl font-semibold mb-2">References</h2>
                    <p>
                        For more information on web scraping, refer to the official Python documentation:
                        <br />
                        <a
                            href="https://docs.python.org/3/library/urllib.html"
                            className="text-blue-400 hover:underline"
                        >
                            Python Documentation
                        </a>
                    </p>
                </div>
                <CodeSnippet language="python" code={webScraperCode.python} />
            </div>
        </div>
    );
};

export default WebScraper;