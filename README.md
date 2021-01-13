# xiVIEW_container

brings together several projects from Rappsilber Laboratory to provide a search software independent web interface to CLMS data. It uses the git submodule mechanism (except for xiAnnotator at the moment).

# Installation Instructions

## 1. Pre-requisites: Apache, PostgreSQL, PHP postgres modules, Git

If running the server on Windows then the easiest way to get Apache and Php setup is to install [XAMPP](https://www.apachefriends.org/download.html).

## 2. Create xiVIEW database and database user

Initialise the database by running the schema.sql script from this project

## 3. Checkout out this github project, initialising submodules

From the document root of your webserver
      
`git clone --recurse-submodules https://github.com/Rappsilber-Laboratory/xiView_container.git
`

## 4. Configure the python environment for the file parser

Follow the instructions at [https://github.com/Rappsilber-Laboratory/xiSPEC_ms_parser](https://github.com/Rappsilber-Laboratory/xiSPEC_ms_parser) but you don't need to install sqlite; instead you need to edit the file xiSPEC_ms_parser/credentials.py to point to your postgress database.

## 5. Install xiAnnotator

Follow the instructions at  https://github.com/Rappsilber-Laboratory/xiAnnotator/tree/master/doc/SysV

Connecting to the annotator from the javascript running in the browser requires you to do some stuff setting up a proxy to it.
I think you will need the apache proxy_http & headers modules installed.

You will need something like this in the apache config for the host:
'''<Location "/xiAnnotator">
   ProxyPass http://localhost:8083/xiAnnotator
   ProxyPassReverse http://localhost:8083/xiAnnotator
   Header add "Access-Control-Allow-Origin" "*"
</Location>  
'''

## 6. Edit yet more config files (todo - tidy this up)

Edit ./connectionString.php so it points to your PostgreSQL database
Edit ./xiSPEC_config.php so it points to your xiAnnotator service

.gitignore will ignore your changes to these files

Copy the xi_ini directory in this project into the project parent directory
cp ./xi_ini ../xi_ini
Edit ../xi_ini/emailInfo.php to contain the information needed for user registration, this is (i) your google recaptcha secret key, and (ii) the email account details.
The email account is used to send confirmation emails and password reset requests.
