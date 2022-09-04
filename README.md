<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README.md</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="présentation">Présentation</h1>
<p><strong>Groupomania</strong> est un réseau social privé visant à améliorer les conditions de travail des employés de l’entreprise en leur proposant une plateforme où échanger.<br>
Il s’agit également d’un projet étudiant OpenClassrooms dans le cadre de la formation développeur web.</p>
<h1 id="comment-installer-groupomania">Comment installer Groupomania</h1>
<p>Attention, Groupomania fonctionne avec une base de données relationnelle utilisant le langage SQL. Dans le cadre de la soutenance, un fichier groupomania.sql avec un utilisateur disposant de droits administrateur a été fournie dans les livrables.</p>
<p>Voici les identifiants de cet utilisateur :<br>
email : <a href="mailto:admin@admin.com">admin@admin.com</a><br>
password : Admintest22*</p>
<p><strong>BACK</strong><br>
Depuis la racine du projet, exécutez la commande <code>cd back</code> suivie de <code>npm install</code> dans votre terminal.<br>
Une fois l’installation des packages faite, n’oubliez pas de renommer le fichier .env.example en <strong>.env</strong>. et de le remplir comme suit :</p>
<p>PASSWORD=“votre_valeur”<br>
TOKEN=“EJAZ1KL5MR45EJZM1RRE976JKLM”<br>
DB=“groupomania”<br>
USER_NAME=“votre_valeur”<br>
HOST=“votre_valeur”<br>
ADMINPASSWORD=“Admintest22*”</p>
<p>Une fois cela fait, vous pourrez exécuter la commande <code>npm run dev</code>.</p>
<p><strong>FRONT</strong><br>
Retournez la racine du projet et exécutez la commande <code>cd front</code> suivie de <code>npm install</code>.<br>
Une fois cela fait, vous pourrez exécuter la commande <code>npm run dev</code> et vous rendre sur le lien généré dans votre console.</p>
<h1 id="fonctionnalités-disponibles">Fonctionnalités disponibles</h1>
<p>Il est possible de :</p>
<ul>
<li>créer un compte</li>
<li>se connecter</li>
<li>créer un post contenant soit du texte, soit une image ou bien les deux</li>
<li>consulter tous les posts créés</li>
<li>modifier un post que avez créé pour changer ou retirer son texte (si celui-ci possède une image)</li>
<li>supprimer un post que vous avez créé</li>
<li>modifier et supprimer n’importe quel post si vous êtes administrateur</li>
<li>réagir à un post en cliquant sur l’emoji ❤ (appuyer à nouveau retire votre réaction)</li>
<li>consulter le nombre de like total d’un post</li>
<li>se déconnecter</li>
</ul>
</div>
</body>

</html>
