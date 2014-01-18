Title: Code Complete: notes
Date: 2014-01-18 11:16
Tags: book, code complete, notes
Slug: code-complete-notes
Author: w0ng
Summary: Brief notes taken from the book, Code Complete (2004), by Steve McConnell.

These are brief notes taken from the book, <cite>[Code Complete
(2004)][amazon]</cite>, by Steve McConnell. For more verbose notes, check out
[this][review] extended review of the first edition.

This book is a language-independent best practices guide to programming.
Despite being a decade old, the presented concepts are still relevant today.
McConnell encourages the use of systematic approaches to divide and conquer
complexity throughout all stages of the software development process.

The book is most beneficial for [intermediate programmers][intermediate] in
that you can't truly appreciate some of the concepts until you've had
experience with them. This book is helpful in two ways:

-   It consolidates what you already know, by linking theories to practice.
-   It makes you aware of your bad habits and explains how to replace them with
    good ones.

These points are the basis for the notes I took.

[amazon]: http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670
[review]: http://codecourse.sourceforge.net/materials/Code-Complete-A-Detailed-Book-Review.html
[intermediate]: http://programmers.stackexchange.com/questions/13778/when-one-should-read-code-complete

## I: Laying the Foundation

Use metaphors as a heuristic tool to give insight into programming problems and
processes.

Iterative approaches are often more useful than sequential ones in requirements
planning.

Programming _in_ a language limits thoughts to constructs that the language
directly supports.

Program _into_ a language by first deciding what thoughts to express, before
determining how to express those thoughts in the language.

## II: Creating High-Quality Code

Software's primary technical imperative is managing complexity. Attack
complexity by having a design focus on simplicity.

Design heuristics include finding real-world objects, forming consistent
abstractions and encapsulating implementation details.

Keep coupling loose by having a small size, high visibility and high
flexibility.

Keep cohesion strong by ensuring every routine in a class, or all code in a
routine, supports a central purpose.

__[Pimpl idiom][pimpl]__: decouple implementation details from an interface by
using opaque pointers.

__[Miller's Law][millers]__: A person can remember 7 ± 2 discrete items whilst
performing other tasks.

__[Liskov Substitution Principle (LSP)][lsp]__: subclasses must be usable
through the base class interface without the user knowing the difference.

__[Law of Demeter (LoD)][lod]__: an object may directly call its own methods,
but not chain methods.

Use exceptions for anticipated conditions, e.g. bad input data.

Use assertions for conditions that should never occur, i.e. program bugs.

__Pseudocode Programming Process (PPP)__: write a routine in pseudocode,
gradually decompose it into code comments, iterate through multiple
designs, code the best approach.

__Just One More Compile syndrome__: hastily trying to make the routine work for
the next compilation, rather than thoroughly checking the code.

[pimpl]: http://en.wikipedia.org/wiki/Opaque_pointer
[lsp]: http://en.wikipedia.org/wiki/Liskov_substitution_principle
[lod]: http://en.wikipedia.org/wiki/Law_of_Demeter
[millers]: http://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two

## III: Variables

__[Principle of Proximity][proximity]__: keep related actions together.

Minimise both variable spans and variable live times.

The later the binding time, the greater the flexibility built into the code.
However, consider that the greater the flexibility, the greater the complexity.

__[Hybrid coupling][hybrid]__: variables with hidden meanings e.g. if `int
pgCount` is designed to report the number of pages, don't moonlight it
as a boolean error checker with `pgCount = -1`.

The optimum average length of a variable is 10 to 15 characters.

Longer names are better for rarely used and global variables. Shorter names are
better for local and loop variables.

Place qualifiers after the noun, e.g. `expenseTotal`, `revenueAverage`.

Avoid using `num` as a qualifier as it can create confusion.

Avoid using `temp` named variables as it can indicate that the problem
isn't fully understood.

Avoid using negative boolean names, e.g. `notFound`, `unsuccessful`.

Adopt generic naming conventions for: variable names vs routine names, classes
vs objects, global variables, member variables, type definitions, named
constants, enumerated elements.

__[Off-by-one error (OBOE)][oboe]__: extending over a boundary by 1, e.g. when
iterating a loop.

Define first and last entries of an enumeration for use as loop limits.

Use arrays as a last resort. Consider alternative data structures first.

__Tramp data__: data passed to one routine merely to pass it to another
routine.

__[Side effect][side-effect]__: when a function, in addition to returning a
value, modifies some state.

__[Aliasing][aliasing]__: accessing the same variable by different names.

[proximity]: http://en.wikipedia.org/wiki/Principles_of_grouping#Proximity
[hybrid]: http://en.wikipedia.org/wiki/Hybrid_coupling
[oboe]: http://en.wikipedia.org/wiki/Off-by-one_error
[side-effect]: http://en.wikipedia.org/wiki/Side_effect_%28computer_science%29
[aliasing]: http://en.wikipedia.org/wiki/Aliasing_(computing)

## IV: Statements

In `case` statements, only use `default` clauses to detect legitimate defaults
or to detect errors.

Comment on every `case` flow-through to clearly identify and describe why.

Avoid code that depends on the loop index's terminal value.

Limit nesting of statements to 3 levels.

__[Arrow anti-pattern][arrow]__: multiple nested conditional statements before
the main code.

__[Guard clause][guard]__: early exits or returns placed at the beginning of a
routine.

__[De Morgan's laws][demorgan]__: transformation rules for for simplifying
boolean expressions.

Check if brackets balance by creating a counter in your head. Start at 0. Add 1
for each opening bracket. Subtract 1 for each closing bracket.  Brackets are
balanced if the result is 0.

Organise numeric tests in number-line order, e.g.  `(MIN_AGE <= i && i <=
MAX_AGE)`, `(i < MIN_AGE || MAX_AGE < i)`.

Use an empty `DoNothing()` macro or inline function for intentional null
statements.

[guard]: http://c2.com/cgi/wiki?GuardClause
[arrow]: http://c2.com/cgi/wiki?ArrowAntiPattern
[demorgan]: http://en.wikipedia.org/wiki/De_Morgan%27s_laws

## V: Code Improvements

Testing is the process of detecting errors.

Debugging is the process of diagnosing and fixing the root causes of detected
errors.

__[Equivalence class partitioning (ECP)][ecp]__: divide input data into test
cases that uncover the same classes of errors.

__[Boundary-value analysis][bva]__: testing for OBOEs and minimum and maximum
allowable values.

Bad-data test classes: null, uninitialised, too little, too much, wrong size,
wrong kind.

Good-data test classes: nominal, minimum normal, maximum normal, backward
compatible.

__Cardinal Rule of Software Evolution__: internal quality should improve with
code evolution.

__[Don't repeat yourself (DRY)][dry]__: principle aimed at reducing redundancy.

Setup code before a routine call, or takedown code after a routine call, may
indicate bad abstraction.

__[Pareto principle][pareto]__: 80% of the effects come from 20% of the causes.

Code tuning sacrifices readability and maintainability for performance.

[ecp]: http://en.wikipedia.org/wiki/Equivalence_partitioning
[bva]: http://en.wikipedia.org/wiki/Boundary-value_analysis
[dry]: http://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[pareto]: http://en.wikipedia.org/wiki/Pareto_principle

## VI: System Considerations

To find a project's "right-weight" methodology, scaling up a lightweight
methodology is better than scaling down a heavyweight methodology.

For any project attribute, there's always some way of measuring that's better
than not measuring at all.

__[Daily build][daily] and [Smoke Test][smoke]__: run simple checks on the
latest version everyday to determine if a build is accepted for further
testing.

[daily]: http://en.wikipedia.org/wiki/Daily_build
[smoke]:    http://en.wikipedia.org/wiki/Smoke_test#Software_development

## VII: Software Craftsmanship

__Fundamental Theorem of Formatting__: good visual layout shows the logical
structure of a program.

Self-documenting code is the Holy Grail of legibility.

Good comments don't repeat nor explain the code. They clarify its intent.
