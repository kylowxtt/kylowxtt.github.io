---
layout: post
title: Recap of my OOP Assignment
date: 2023-11-02 20:32 +1100
---
# Dungeonmania 

## What is this assignment aiming to achieve?

While in Assignment I you developed a system from scratch, in this Assignment you will be developing a system that has been started by someone else. You’ll need to analyse and refactor the code in the monolith repository we’ve provided, and then adapt the solution to an evolution in the requirements.

The aims of this assignment can be broken down into five major themes:


**Acclimatising to an existing system.**  For many of you this will be the largest codebase you have worked on to date - which can be very daunting! Being able to work with a system that you haven’t built from scratch and don’t fully understand is a vital skill, since software is never developed in isolation.

**Refactoring Techniques.** Like when you go camping, you always want to leave the code in a better state than you found it in. We’ve intentionally put in a series of design flaws, with accompanying design smells for you to discover and refactor.

**Design Patterns.** Being able to see patterns in existing code, and to use patterns to improve code quality is an essential skill in a Software Engineer. You’ll have the chance to do this and apply the theoretical ideas discussed in lectures.

**Evolution of Requirements.** Software is never static - it always evolves and grows as do its requirements. You’ll need to build on the existing system to accomodate for these changes, in doing so undergo an iterative design and development process.

**Dealing with The Unknown.** There are many unknowns in this assignment that you and your partner will encounter. You will need to explore and investigate together, clarify and ask for help where needed and approach these unknowns with grace in order to succeed.

## Task 1 

Task 1 of this assignment was very simple - but was actually where I had the most fun with this codebase. Basically, they asked gave us the codebase for a (relatively poorly implemented) dungeon crawler game - and we had to use the OOP knowledge we have accumulated to clean the codebase up and make it easier to implement new stuff in the future. 

We were provided with 100 or so tests, with the goal being to ensure that they all remained passing throughout our refactoring experience. This assignment was a group task - but I wanted to challenge myself, so I volunteered to take the harder refactoring tasks onboard, so I could further synthesise the course content I had learnt. In this process, I found use of the **Factory**, **Strategy** and **State** patterns extremely useful, they allowed me to create nicely written code that handled all necessary logic at the class level. 

At the end, our codebase looked very healthy - we both did very well on this part of the assignment, and we were ready to move into the next task. 

## Task 2

Task 2 of this assignment was extending the codebase to implement new features. 

The first task was pretty simple, just implement a "enemy" goal, where you keep track of the amount of kills a player has gotten (and if hes destroyed all the spawners) to win the game. This was very simple as I had already done a lot of refactoring on this area of the codebase, and my teammate had done similar refactoring in the Enemy package, so it was easy to complete this in the span of 2 or so hours. Before actually writing the lines of code, I first went through a basic draft of what I was expected to implement, and how. After deciding on how to execute these (being the creation of a new goal class to handle the needed design), 
I wrote out very generalised test cases that would be used to determine if the implementation worked. I normally am not a fan of writing test cases before doing the implementation - I find that the solution to the problem comes faster for me if I spend time thinking about it rather than how the problem would play out. However, one of my *goals* for this course was to learn and appreciate the importance of TDD in the real world, so I followed it's principles. Surprisingly (or maybe not), I found that this process of thinking through how an implementation would work through the use of test cases allowed me to be aware of test cases in my implementation, and how I should account for them (and write extra tests for any edge cases I found along the way). Overall, I wrote around 10 test cases for this goal, and then moved onto the next part. 

The assignment allowed you and your group member to choose two assignment implementations of your choice - with the mark ranges varying for each of them. I chose the implementation of logical entities and wiring (which was basically a simplified version of Minecraft's redstone system), and my partner chose to do the implementation of new buildable entities. These two tasks were the most valuable tasks marks wise, and we were pretty confident we could complete them given that our codebase was so healthy and extensible. I had recently refactored both the crafting system -> by moving it into a recipe based system instead of hardcoding it, and had also distinctly outlined the observer/subject pattern in the behaviour of logical entities that I knew I could attempt this task. 

To begin with, I first wrote around 16 test cases on how each logical entity / bomb / switch and wire would work, writing both unit and compound tests to ensure that a full game could be played without any bugs or what not. Then, to begin with development, I decided to implement a strategy pattern to handle the logical entities' rules. I first made a Rules abstract class, and then made multiple Rulestrategy classes that each handled if an entity should activate or not inside their classes. I then realised however, that an interface was a more logical choice in this regard, as an abstract class makes sense to use when there is common functionality / signatures across the rule class and it's subclasses, but we only needed to account for the implementation of the achieved function defined in the interface (and each class should be able to handle this in their own way). I also made the RuleFactory a static class - which I didn't do previously for the Goal and Recipes part of my codebase - something I regret as it allows for less flexible code (I have to create a recipefactory class to get a recipe when it would be better to just call it statically). 

Once the rules were fleshed out (I had implemented them wrong and the spec was a bit vague in some parts too), I then decided to move on to the implementation of the conductor entities. As I said above, I implemented a subject and observer interface, and this underwent modification over and over again in the process. To begin with, the conductor entity was designed to be both a subject and observer, and it had two lists to accomodate for this. Each wire would check if its subjects are lit up, and if at least one was lit up, we activate that wire and notify it's observers. This was a good first attempt, and it worked for the most basic of test cases (which made me happy). The switch was also a conductor entity of sorts, but this one should not be able to be activated by anything other than a boulder moving ontop of it. So I ovverid the notify method to ignore anything and just early exit. 

There was a few issues with this, the primary one being that it would only notify that a wire turned on, not off. To accomodate this, I implemented a notify activated and notify deactivated to accomodate for this. 

The next thing I found was that I had a stack overflow issue, as when something would deactivate, it would notify its observer, which would deactivate and notify its wire and so on and so forth. I had this issue, and the issue that in a circuit of wires A - B - C, when A turns off, B would see that there is still one wire that is powered that it is next to, and not turn off. To accomodate *this*, I had to implement an activatedby hashset, where if this hashset was empty, the wire would then turn off. This took a bit of grinding to get everything working but it did. Until it didnt of course. I kept getting a concurrent modification error, which I found out was because I was iterating through the observer hashset and removing it when a bomb exploded. To fix this, it was pretty easy, I just had to make a copy of the observers list, and then iterate through that instead. 

Anyways, that is how I did my second OOP assignment, and I think it was pretty fun. I wrote this to both share with the blog and also to account for the blogging part of the assignment. Task 3 also exists, I will edit this post when I get the chance to do it. 