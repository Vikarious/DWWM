# Ecrire un programme qui réalise la saisie par l’utilisateur d’un nombre et qui indique si ce nombre est divisible par 3 ou pas.

# On pourra par exemple utiliser le modulo (%)



userInt = float(input("Entrez un nombre svp: "))

if userInt % 3 != 0:
    print("Votre nombre n'est pas divisible par 3")
else:
    print("Votre nombre est divisible par 3")