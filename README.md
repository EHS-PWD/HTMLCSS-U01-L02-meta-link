### Unit 01 - Lesson 2: Meta and Link Tags

#### **Objective:**

After learning about the `<meta>` and `<link>` tags, students will apply these concepts by extending their previous HTML document. This assignment will demonstrate their understanding of how to include metadata and external resources, such as stylesheets, using these tags.

---

### **Step-by-Step Guide:**

1. **Open Your Existing HTML Document:**

   - Open the `index.html` file that you created in Lesson 1.

2. **Update the Head Section with a Meta Charset Tag:**

   - [ ] Inside the `<head>` tag and above the `<title>` tag, add the following `<meta>` tag to define the character set as UTF-8. This ensures that the browser displays the page correctly:
     ```html
     <meta charset="UTF-8" />
     ```

3. **Add Meta Description Tag:**

   - [ ] Below the `<meta charset="UTF-8">` tag, add a description for your webpage using the following `<meta>` tag. This tag provides a brief summary of the content of your webpage, useful for search engines:
     ```html
     <meta
       name="description"
       content="A simple webpage demonstrating the basics of HTML structure."
     />
     ```

4. **Add Meta Keywords Tag:**

   - [ ] Below the description tag, add a `<meta>` tag for keywords. This helps search engines understand the primary topics of your page:
     ```html
     <meta name="keywords" content="HTML, web development, tutorial, basics" />
     ```

5. **Add the Link Tag for a CSS File:**

   - [ ] Below the `<title>` tag, add a `<link>` tag to link an external CSS stylesheet. This stylesheet will style your webpage. For now, use a placeholder link as you don’t have a real stylesheet yet:
     ```html
     <link rel="stylesheet" href="styles.css" />
     ```

6. **Review the Updated Head Section:**

   - [ ] At this point, your `<head>` section should look something like this:
     ```html
     <head>
       <meta charset="UTF-8" />
       <meta
         name="description"
         content="A simple webpage demonstrating the basics of HTML structure."
       />
       <meta
         name="keywords"
         content="HTML, web development, tutorial, basics"
       />
       <title>My First Web Page</title>
       <link rel="stylesheet" href="styles.css" />
     </head>
     ```

7. **Save Your Work:**

   - [ ] Save the file as `index.html`.

8. **Test Your HTML Document:**

   - [ ] Open the `index.html` file in a web browser.
   - [ ] While you won’t see the meta tags on the page itself, you can inspect the document source (Right-click on the page -> View Page Source) to ensure the meta tags and link tag are correctly added.

9. **Submit Your Work:**
   - [ ] Once you’ve verified that the code works correctly, submit the updated `index.html` file to the class assignment folder or through the school’s learning management system.

---

### **Assessment Criteria:**

- Correctly added `<meta charset="UTF-8">`, `<meta name="description">`, and `<meta name="keywords">` tags inside the `<head>` section.
- Inclusion of a valid `<link>` tag to an external stylesheet.
- Proper structure of the HTML document, ensuring no tags are missing or misplaced.
- Submission of the updated `index.html` file.
