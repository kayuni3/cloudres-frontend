# Front-end of Cloud Resume

The cloud resume challenge can be found here: https://cloudresumechallenge.dev/docs/the-challenge/azure/

# Overview

Using HTML and CSS, I have created the front-end of my site. I did not use a template except for the meter element. I purchased my domain from google with a .dev and deployed it using Azure CLI instead of the portal just to practice. In this repo you will find all of the scripts that I wrote for the front-end of my site. You can find the end product here: 

# How I created certain elements 

Website Layout: defined class selectors like .header, .footer, .column, etc and configuring their widths, margins, padding, float, etc in a CSS file and linking it externally to my html pages.

A full column under your header could look like:  

.example { 

    width: 100%;  
    
    margin-top: 4em;  
    
    margin-bottom: 2em;  
    
    } 
    
   
 Two equal columns could look like:   
 
 
   
   example{   
   
    width: 100%;  
    
    margin-top: 4em;  
    
    margin-bottom: 5em;  
    
    padding: 2em;  
    
    }. 
    
   
   footer {    
   
        width: 100%;  
        
        bottom: 0; ~setting the bottom sticks the footer to the bottom. 
        
   } 
 

Paradoxical scrolling of navigation bar and footer: Set position property to fixed of selector.   


example {   

    postion: fixed;
    
    }

I linked my CSS file separately since I had about 5 different html pages so it would be easier to make changes to my page theme. 


# Creating the static website 

This part was super easy. In the Azure portal, I selected the storage account resource, created a resource group for the storage account. Once the storage account was created, in the Overview tab, under capabilities, I selected "static website", uploaded all of my files (it took a few minutes for the site to actually configure which scared me for a second). Once my site was created, I enabled a CDN endpoint and created a DNS zone.   purchased a $10 custom domain from Google Domains. I then connected my custom domain to my CDN endpoint. & Voila! www.kayuni.dev!

# Documentation used

Custom domain name: https://learn.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal. 

HTTP to HTTPS redirect: https://learn.microsoft.com/en-us/azure/cdn/cdn-standard-rules-engine  

Configuring GitHub Actions: https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel. 
(overwrite command is needed so that changes to website can be commited and deployed to your site!)
