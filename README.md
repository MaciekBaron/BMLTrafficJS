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
* [Default](https://maciekbaron.github.io/BMLTrafficJS/) (density 40, rule 3922832263383)
* ["Bleeding" squares](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=1&r=6633271871019) (density: 1, rule 6633271871019)
* [Shifting glaciers](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=56&r=2945069840504) (density 56, rule 2945069840504)
* [Giant smoke clouds](https://maciekbaron.github.io/BMLTrafficJS/#?s=ss&d=85&r=1465563147788) (either of the colours takes over depending on the seed, density 85, rule 1465563147788)
* [Burning forest](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=42&r=18782875399) (density 42, rule 18782875399)
* [Thin clouds moving](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=39&r=3783717266644) (density 39, rule 3783717266644)
* [Patchy pattern](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=26&r=6492595613908) (density 26, rule 6492595613908)
* [Disease spreading](https://maciekbaron.github.io/BMLTrafficJS/#?s=slavery&d=41&r=2422537391442) (density 41, rule 2422537391442)
* [Funny looking clouds](https://maciekbaron.github.io/BMLTrafficJS/#?s=Javascript&d=44&r=3632664672427) (density 44, rule 3632664672427)
