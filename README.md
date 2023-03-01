# Front-end of Cloud Resume

The cloud resume challenge can be found here: https://cloudresumechallenge.dev/docs/the-challenge/azure/

# Overview

Using HTML and CSS, I have created the front-end of my site. I did not use a template except for the meter element.  

# How I created certain elements 

Website Layout: defined class selectors like .header, .footer, .column, etc and configuring their widths, margins, padding, float, etc in a CSS file and linking it externally to my html pages.

A full column under your header could look like:
.example {
    width: 100%;
    margin-top: 4em;
    margin-bottom: 2em;
    }
   
 Two equal columns could look like:
 .example {
    width: 100%;
    margin-top: 4em;
    margin-bottom: 5em;
    padding: 2em;
    }
   
   footer {  
        width: 100%;  
        bottom: 0; ~setting the bottom sticks the footer to the bottom
   } 
 

Paradoxical scrolling of navigation bar and footer: Set position property to fixed of selector  

.example {
    postion: fixed;
    
    }



