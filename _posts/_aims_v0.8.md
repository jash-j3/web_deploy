---
title: "AIMS-Helper-Chrome v0.8 Announcement"
excerpt: "Lambda IITH is proud to announce the release of AIMS-Helper-Chrome v0.8, with a new feature and a host of bug-fixes. Read now to know about the current version updates and our future plans with this utility."
coverImage: "/static/images/blog/aims/aims_gpa_calc.webp"
date: "2023-06-12T05:35:07.322Z"
author:
  name: Lambda IITH
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/aims/aims_gpa_calc.webp"
duration: 6
---

We at Lambda are pleased to announce a new release of the widely used AIMS-Helper Extension. This release contains a new long-requested feature along with a host of bug-fixes and updates to library code. The changelog of the extension is attached below. 

## **New Feature**: 
**GPA Calculation:  Select or Deselect an entire semester's courses**. Click the new checkbox beside every semester's header to quickly select a semester's courses or deselect all the courses from that semester. The checkbox essentially acts as a reset/default selection button. We hope this will make it easier to calculate one particular semester's GPA.

![Semester GPA Selection](/static/images/blog/aims/semester_select.webp)

## **Bug fixes**: 
 - Timetable generation: Thanks to [Sumanth](https://github.com/Sigma1084): The timetable code generation is now more robust. In case that the slot endings were off by a minute, the extension still generates the timetable for these courses. An incorrect mention of the 17:30-18:55 slot has also been corrected. 
 - Timetable: Earlier, having a course present in an unknown slot would lead the timetable generation to fail entirely. This is no longer the case, and the erronous course is now ignored.
 - Timetable Download: Earlier, sometimes an empty white page would be present in the downloaded timetable PDF. This has now been fixed. The dimensions of the printed PDF have also been tweaked to ensure that the entire timetable gets printed.
 - GPA Calculation: Earlier, Minor Elective courses used to be included by default in calculating your CGPA. This has now been fixed, and the courses are ignored by default. 

### **Library updates**:
 - Updated html2pdf.js to v0.9.3  

 Make sure you grab the latest release from the [Chrome WebStore](https://chrome.google.com/webstore/detail/aims-helper/njgpoifkefbbhjohcadcngdomfifcflj?hl=en) or head out to [GitHub](https://github.com/LambdaIITH/AIMS-Helper-Chrome) for manual installation instructions. 

### Future plans and Roadmap:

AIMS-Helper has been a long running project under Lambda IITH. It had humble beginnings as a simple TamperMonkey Script for GPA Calculation, and soon gained functionality for the timetable upload, making it an invaluable piece in the IITH Dashboard pipeline. It has survived multiple years of operation, and gone through some major refactoring to keep it up to date with latest standards. 

We aim to bolster this project to make it more usable for IITH Users. Right now, our immediate roadmap consists of the following:
 - **Migration to Manifest v3**: [Manifest v3](https://developer.chrome.com/docs/extensions/mv3/intro/) represents the new set of APIs that all Extensions will be adhering to in the near future. Although there have been pushbacks regarding MV3, they do not affect this repository. Migrating to the newer standard is also expected to usher in cleaner code, improved performance and faster code reviews. We also expect this to be mandated by Google in the near future, so this remains one of our top priorities.
 - **ERP Portal Inclusion**: There is a new ERP Portal that is in operation since the 2022 Batch. For AIMS-Helper, we will have to design a separate frontend which scrapes courses and the timetable from the ERP Portal as it currently does with the AIMS Portal. The majority of the work is expected to be in scraping with only some minor adjustments to the backend code deemed necessary.
 - **GPA Redesign**: The current GPA page presents just a handy summary of one's selected courses. However, there is some scope of refinement here. We plan to improve certain parts, such as showing semester wise GPAs, Minor/Honors courses separately. We also have plans to improve/overhaul the design of the summary page, giving users more control about information is presented in the summary. 
  
 We would also like to invite feedback, suggestions and contributions from the community. Please file issues on the GitHub repository so as to initiate discussions on feature requests/possible bugs/improvements. Alternatively, feel free to [email](mailto:lambda@iith.ac.in) us for your valuable feedback.
