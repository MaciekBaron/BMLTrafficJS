BMLTrafficJS
============

[Biham–Middleton–Levine traffic model](http://en.wikipedia.org/wiki/Biham-Middleton-Levine_traffic_model) 
simulation in JavaScript using canvas. It incorporates [RC4](http://en.wikipedia.org/wiki/RC4) pseudo-random 
number generation to provide consistent visualisations for the same seed.

From Wikipedia:

> The **Biham–Middleton–Levine traffic model** is a self-organizing cellular automaton traffic flow model. It 
consists of a number of cars represented by points on a lattice with a random starting position, where 
each car may be one of two types: those that only move downwards (shown as blue in this article), and 
those that only move towards the right (shown as red in this article). The two types of cars take turns 
to move. During each turn, all the cars for the corresponding type advance by one step if they are not 
blocked by another car.

What's interesting is the fact that even though the simulation only follows two simple rules (blue goes down, 
red goes right) this is sufficient to create impressive, self-organizing structures and animations.

What's even more interesting is that if you change the rule (which can be defined as a 27 digit ternary number) 
you can create other interesting animations. This means that the algorithm can work on 7625597484986 (over 7 
trillion) different rules. Obviously most of these rules will create noise, but quite a few of them create 
beautiful or interesting outcomes.

**[See it in action (using canvas)](https://maciekbaron.github.io/BMLTrafficJS/)**


*Warning: might create flashing images*

Here's a list of interesing examples using different rules:
* [Default](https://maciekbaron.github.io/BMLTrafficJS/) (density 40, rule 89096871199)
* ["Bleeding" squares](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=1&r=567013497971) (density: 1, rule 567013497971)
* [Shifting glaciers](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=56&r=5568595274728) (density 56, rule 556859274728)
* [Giant smoke clouds](https://maciekbaron.github.io/BMLTrafficJS/#?s=ss&d=85&r=5901814860924) (either of the colours takes over depending on the seed, density 85, rule 5901814860924)
* [Burning forest](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=42&r=4086339390855) (density 42, rule 4086339390855)
* [Thin clouds moving](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=39&r=2930560032244) (density 39, rule 2930560032244)
* [Patchy pattern](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=26&r=4039511111132) (density 26, rule 4039511111132)
* [Disease spreading](https://maciekbaron.github.io/BMLTrafficJS/#?s=slavery&d=41&r=1222888773354) (density 41, rule 1222888773354)
* [Funny looking clouds](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=44&r=3981204071203) (density 44, rule 3981204071203)
