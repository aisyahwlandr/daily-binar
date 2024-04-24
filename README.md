<h1>STEP INSTALL</h1>

<p>npm i express</p>
<p>npm init -y</p>
<p>npm i -D nodemon</p>
<p>npm i sequelize</p>
<p>npm i sequelize-cli</p>
<p>npx sequelize init</p>
<p>npm install --save pg pg-hstore</p>
<p>npm install dotenv</p>
<p>npm i express-fileupload</p>
<p>npm install cloudinary</p>
<p>npm i bcrypt</p>
<p>npm i jsonwebtoken</p>

<p>------------------------------------------------------------------</p>

<p>npx sequelize db:create</p>
<p>npx sequelize model:generate --name class --attributes name:string</p>
<p>npx sequelize model:generate --name student --attributes name:string,photo:text,class_id:integer</p>
<p>npx sequelize migration:create --name classes_students_deletedAt</p>
<p>npx sequelize db:migrate:undo</p>
<p>npx sequelize model:generate --name user --attributes email:string,password:text,name:string,photo:text</p>
<p>npx sequelize db:migrate</p>
<p>npx sequelize migration:create --name users_add_column_role</p>
<p>npx sequelize db:migrate</p>

<p>------------------------------------------------------------------</p>

<p>npm create vite@latest topic-1 -- --template react</p>
<p>cd topic-1</p>
<p>npm install</p>
<p>npm install react-bootstrap bootstrap</p>
<p>react-router-dom</p>
<p>npm i react-router-dom</p>


