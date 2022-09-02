<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="présentation">Présentation</h1>
<p><strong>Groupomania</strong> est un réseau social privé visant à améliorer les conditions de travail des employés de l’entreprise en leur proposant une plateforme où échanger.</p>
<h1 id="comment-installer-groupomania">Comment installer Groupomania</h1>
<p>Attention, Groupomania fonctionne avec une base de données relationnelle utilisant le langage SQL. Pour mener à bien vos tests, il est nécessaire de savoir configurer une base de données pour permettre au backend de l’application de s’y connecter. Dans le cadre de la soutenance, la database avec un utilisateur disposant de droits administrateur a été fournie dans les livrables.</p>
<p><strong>BACK</strong><br>
Depuis la racine du projet, exécutez la commande <code>cd back</code> suivie de <code>npm install</code>.<br>
Une fois l’installation des packages faite, n’oubliez pas de renommer le fichier .env.example en <strong>.env</strong>. et de le remplir.<br>
Une fois cela fait, vous pourrez exécuter la commande <code>npm run dev</code>.</p>
<p><strong>FRONT</strong><br>
Depuis la racine du projet, exécutez la commande <code>cd front</code> suivie de <code>npm install</code>.<br>
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
