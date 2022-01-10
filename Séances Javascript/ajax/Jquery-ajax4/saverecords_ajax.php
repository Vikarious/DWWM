<?php

$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION; 
$db = new PDO('mysql:host=localhost;dbname=dbusers;charset=utf8', 'root', 'root',$pdo_options);


/* Get data from Client side using $_POST array */
$fname  = $_POST['first_name'];
$lname  = $_POST['last_name'];
$email  = $_POST['email'];


$requete = $db->prepare('INSERT INTO users(prenom, nom, email) VALUES(:prenom, :nom, :email)'); 
$requete->execute(array(
	 'prenom' => $fname,
	 'nom' => $lname,
	 'email' => $email)); 

echo 'Vous êtes enregistré !'; 

?>
