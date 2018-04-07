# SkillTerrier application

A Javascript (Node.js) application with a PostgreSQL database and EJS client application, bundled with npm for hosting on Heroku.

If you get hung up on any of the steps below please let me know and we can troubleshoot.

## Getting Started

First clone the repo (https://github.com/kjsuyo/sknova) and change directories into it.

Install dependencies (`npm install`).

Install the Heroku CLI.

### Sequelize, PostgreSQL, and the Production Database

SkillTerrier uses the Sequelize ORM for PostgreSQL database management.  You will need to install the Sequelize CLI in addition to the Sequelize NPM dependency: `npm install -g sequelize-cli` and `npm install --save sequelize pg pg-hstore`.  

You will also need to install PostgreSQL (https://www.postgresql.org).  SkillTerrier runs on unmodified PostgreSQL 9.6.  It may also be helpful to install the PostgreSQL CLI (psql) as well as the desktop application, PGAdmin (the most recent version is PGAdmin 4 v2).

You will need to initialize Sequelize by running `sequelize init`.  Note that this will probably overwrite several files in the directory, including the config/config.json; it may help just to pull the code from the Git repository again.  

In the file config/config.json, you will need to change the development database password to whatever is your password for the user postgres on your local PostgreSQL.  Of course, you can also just set your password to be `Database1!`.

Create the database using the Sequelize CLI using the command `sequelize db:create database_production`.  Then, turn the tables up with the command `sequelize db:migrate`.  In PGAdmin, you should be able to see all of the tables in your new database (database_production), but they should be empty if you query them.  Let's fix that now.  

First, in PGAdmin, drop all of the (empty) tables from the database using the SQL query `DROP TABLE public."Abilities" CASCADE;` (repeat for each of the tables after the Abilities table).  Then grab the current production database (the most recently uploaded .dump file) at the public Amazon S3 bucket, https://s3.amazonaws.com/skillterrier/.  Finally, use the Restore function on database_production (right click on the database and click 'Restore') in PGAdmin to restore the database from that file.

At this point, you can test whether it has been set up correctly -- you should see it in your list of available databases in PGAdmin, and you should be able to run queries through the query tool (e.g., `SELECT * FROM public."Categories";`), and those queries should return data.  Note that Sequelize is caps-sensitive but PostgreSQL is not -- you will need to use double quotes "" around capitalized words when querying in PGAdmin.

As an aside: I have found it to be easier to create/update/add to tables in .csv files than directly in SQL, which I then copy into the production database using the COPY INTO command.  The process (especially for creating N:M join tables) is somewhat complicated and finicky, involving lots of VLOOKUPs in Excel.

#### macOS 💻

The steps that follow are for macOS users:
1. Install the production database dump file (e.g. `database_production_042218 .dump`)
2. Install [Postgres.app]("https://postgresapp.com/")
3. Open Postgres.app and click on a pre-generated database
4. Do `\q` to exit that database and type `psql`
5. Create the database (`CREATE DATABASE database_production;`)
6. Finally, restore the database (`$ pg_restore -d database_production database_production_042218\ .dump`)
7. Now open Postgres.app, select `database_production`, and run a command such as `select * from "Zones" limit 15;` to verify the Restore


### Running the app

Use `npm start` to fire up the server.  The app will run on **localhost:3000**.

## Architecture

Standard MVC setup.  Models are found in the models/ folder.  Note that when data is stored specifically for N:M connections (e.g., when a job has a certain median salary in a certain location), this data is stored in the join table; join tables are named like FirstSecond (with the file being firstsecond.js).  The file routes/index.js routes pages to the appropriate controller.  The various controllers in the controllers/ folder query the database using Sequelize functions and send the resulting JSON object(s) (typically a set of arrays) to the appropriate EJS view (views are found in the views/ folder).  

The migrations/ folder holds the files that allow you to create and destroy tables in the database using the Sequelize CLI.  Note that this affects the database itself, so if you accidentally undo a migration, you will have to migrate it again and then re-load all of the data in the affected table(s).

## Cloud setup

The domain is https://www.skillterrier.com/, which is hosted on NameCheap.  

Changes to code are pushed to the GitHub repo, which is connected to the Heroku app (evening-terrier, found at https://evening-terrier.herokuapp.com/).  The Heroku app must be manually deployed via the Heroku Dashboard each time changes are made.

I also have a Heroku pipeline set up (the staging app is called morning-terrier) but it's currently non-functional as it was overkill with only one developer.

The process for making changes to the production database is:
  - make the necessary changes to the database
  - dump the newly modified database to a .dump file using PGAdmin or the psql CLI (using the pg_dump command)
  - Upload the resulting .dump file to the public S3 bucket
  - use the following command: `heroku pg:backups:restore '[S3 link]' DATABASE_URL --app evening-terrier`
  - confirm by typing `evening-terrier`

## Additional resources

### General

- StackOverflow
- SkillTerrier Slack (https://skillterrier.slack.com/) -- if you think this would be valuable

### sequelize

- Sequelize Slack (https://sequelize.slack.com/)
- Sequelize documentation (https://docs.sequelize.com/)

### PostgreSQL

- Documentation (https://postgresql.org/)

## License

(c) 2017 Kevin Suyo and SkillTerrier.  Released under the [MIT license](./LICENSE).
