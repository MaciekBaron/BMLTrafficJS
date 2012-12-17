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

What's even more interesting is that if you change the rule (which can be defined as 27 digit ternary number) 
you can create other interesting animations. This means that the algorithm can work on 7625597484986 different 
rules. Obviously most of these rules will create noise, but quite a few of them create beautiful or interesting 
outcomes.

[See it in action](http://htmlpreview.github.com/?http://github.com/MaciekBaron/BMLTrafficJS/blob/master/index.html)

*Warning: might create flashing images*
