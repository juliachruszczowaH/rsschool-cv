# YULIYA KHRUSHCHOVA
## JavaScript developer (junior)
> [julia.chruszczowa@gmail.com](mailto:julia.chruszczowa@gmail.com)  
> +375 29 364-03-73  
> Skype: Yuliya Khrushcheva (hrustapka)  

--------
### Summary
JavaScript Front-end Developer with no experience, but great desire to design, develop, and manage web-applications and internal frameworks. 

------
### Technical
Technologies: JavaScript, HTML/ CSS, Flash, XML, MySQL, (java, scala - basic Knwolege). 
Bug tracking system: Jira 
Tools: Selenium WebDriver, Soap UI,  InDesign, TestLink, Charles, VirtualBox. 

------
### Experience
------
* September 2017 – up to now :  **QA Engineer** at SVAPS Systems
* April 2015 – September 2017 : **QA Engineer** at  Dual LAb 
* March 2011 - April 2015: **Specialist** at State-owned Institution
* February 2010 - March 2011: **Economist**
* August 2004 - February 2010 : **Chemical industrial engineer**  

------
#### example of code (Task Love-Triangle)
```
module.exports = function getLoveTrianglesCount(preferences = []) {
    const array = preferences;
    const checkedItems = []; // storage of checked items from preferences array
    let counter = 0;
    for (let i = 0; //first index of preferences
         i < array.length; //last index of preferences is its length - 1
         i++) {//iteration
        let firstLover = getUncheckedItem(i);//check if start item has not been used already for another triangle
        let a = array[firstLover];//value of the first item is index for the second item of triangle
        let b = array[a-1];// value of the second item is index for the third item of triangle
        let c = array[b-1]; //value of the third item - should mach the first item index
        if (firstLover == c-1 && a != b && a != c && b != c) {
            // store checked items' indexes
            checkedItems.push(firstLover);
            checkedItems.push(a-1);
            checkedItems.push(b-1);
            counter++;
        }
    }
    function getUncheckedItem(n) {
        while (checkedItems.includes(n))
            n++;
        return n;
    }
    return counter;
};
```
-----

### Education
* 2004-2005 : Belarusian State Economical University, Minsk, Belarus, 
> Speciality: Economics and management in manufacturing 
> Qualification: Economist / Manager 
* 1998-2004 : Belarusian State Technological University, Minsk, Belarus, 
> Speciality: Technology of Electrochemical Production 
> Qualification: Chemical industrial engineer 

### English level:  Upper Intermediate
### Certification 
> ISTQB CTFL (January 2016)