
## To run the server it is highly recommended that you install virtualenv
Install virtualenv
`pip install virtualenv`

Find our where your python 3.5+ installation is located:
`which python3` (or `which python`)

`virtualenv -p /usr/local/bin/python3 pizza-venv`

Now you can activate the virtual python environment by issuing the following command
source pizza-venv/bin/activate

You should see parentheses at the beginning of your prompt. E.g:
```
~/Documents/code/private/pizza (master) $ pwd
/Users/felixnovovic/Documents/code/private/pizza
~/Documents/code/private/pizza (master) $ source pizza-venv/bin/activate
(pizza-venv) ~/Documents/code/private/pizza (master) $
```

Install flask:
`pip install Flask`

The above install command will not mess with your existing python installation if you are running in venv.

## Run the app:

`FLASK_APP=app.py flask run`

If everything has been configured correctly you should be able to view the site at `http://localhost:5000`


