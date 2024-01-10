var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "sec-intro-systems",
  "level": "1",
  "url": "sec-intro-systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   We will introduce the first set of big ideas in this book with an example.    Alex reaches into his pocket and pulls out a handful of coins. He tells us that he's holding 90 cents in his hand, consisting of only nickels (worth five cents each) and quarters (worth 25 cents each). How many coins of each type is Alex holding?  We can model this information with a linear equation. Let be the number of nickels in Alex's hand, and let be the number of quarters. The equation that captures the information Alex shared is .  In this case, we don't have enough information to answer Alex's question. It could be that Alex is holding three nickels and three quarters ( ) or that he is holding 13 nickels and one quarter ( ). There are quite a few solutions to equation . (Note that in this example, since it would not make sense to have only part of a coin, we need our values of and to be non-negative integers.)  Now imagine that Alex gives us additional information by telling us that he is holding exactly ten coins. We can put this information into a second linear equation, and we now have what is called a system of equations . We need to know what values of and satisfy the following equations simultaneously: .  A small amount of work shows us that the values and satisfy these equations simultaneously. (Though you may have been able to produce those numbers yourself, don't worry right now about where those numbers came from. We'll get there soon.) This means that Alex is holding eight nickels and two quarters.   The first major task of Linear Algebra is to learn how to handle systems of linear equations like the one given in . We will learn a method to analyze such systems and determine their solutions (if they have solutions). We need a number of definitions as we get started.  We will use the symbol to denote the set of all real numbers. At the beginning of our work, we will be using as our set of numbers for almost everything. However, when we get to , we will move away from to a more general description of a set of numbers that works for solving linear equations.    A linear equation in the variables is one which can be written in the form where the and are constants. The numbers all come from . In the special situation where , this is called a homogeneous linear equation . (Note that when there are only two variables in view we may use and instead of and ; similarly, when there are only three variables present, we may use , , and .)    The word linear in the phrase linear equation should make us think of a single power of a variable. In a linear equation, therefore, we will have no terms involving , , , , or anything other than a single power of a variable.    The following are linear equations:  . These are all linear equations because every appearance of a variable term in these equations contains only a single variable raised to the first power.  The following are not linear equations: . These are not linear equations because each equation has at least one variable term with something other than a single variable to a single power.      A system of linear equations is a collection of one or more equations involving the same variables. (We sometimes shorten this and refer to a linear system .) When all of these linear equations are homogeneous linear equations, this may be called a homogeneous linear system .      Here is a system of linear equations involving the variables , , , and : . Note that not all variables need to be present in each equation. When a variable is missing, we consider that variable to have a zero coefficient in that equation. It may be convenient (and preferred) to align the terms with the same variables vertically, but when an equation lacks one of the variables this creates a blank horizontal space.      A solution to a system of linear equations in variables is a list of numbers, , such that when the corresponding variables are assigned these numeric values (plug in everywhere for , plug in everywhere for , and so on), all the equations are true statements. The set of all possible solutions is called the solution set of the linear system. Two linear systems are said to be equivalent if their solution sets are equal.    The language of solution sets and equivalent linear systems may seem unnecessarily complex. However, the method (see ) for solving a linear system is much easier to describe with these terms firmly in hand.    Consider the following linear system: . A solution to this system is . (We use this notation to mean and .) We verify this claim by plugging these numbers in for the variables and checking that both equations turn out to be true. (In fact, this is the only solution to this system.)    The fact that we can write down a system of linear equations does not mean that it has a solution. Many linear systems have no solution at all. Others have one or an infinite number of solutions. This can be illustrated by some examples of lines graphed in the familiar setting of .    We first consider the linear system consisting of two simple equations where the solution to each equation is a line in : . Readers will likely realize that the solution to this system happens when the graphs of these lines intersect. We see from the graph below that the intersection occurs at the point . Since this is the only intersection point, there is only one solution to this system.       We now consider a second linear system: . The graphs of these two lines appear below, but in this case the lines do not intersect at all because they are parallel. (The slope of both lines is .)       Here is a third linear system in two variables: . Each of these equations has a solution set whose graph is a line. In this particular case, we obtain the same line for both equations, which means that the linear system has an infinite number of solutions. Each one of the infinite solutions to the first equation is a solution to the second equation, and vice versa.         What we saw in is no accident. This simple collection of examples in exposes our need for the following definitions.    A system of linear equations is consistent if it has at least one solution. A system is inconsistent if it has no solutions. When a linear system has only one solution we say that the solution is unique .    This definition and the principle illustrated in mean that whenever we encounter a system of linear equations we have two questions to ask. Is this system consistent?  If the system is consistent, is the solution unique?     This question is designed to help you understand linear equations.   Write down an example of a linear equation involving the variables , , and .    Write down an example of an equation involving the variables , , and which is not linear.       Find the solution set to the following linear system: .      Carlos has ten coins totalling . Each coin is either a nickel, a dime, or a quarter. He has twice as many nickels as he has quarters. How many of each coin does Carlos have?   Model this problem with a linear system. (You do not need to find the solution set of this linear system.)    Suppose that is a function whose graph passes through the points , , and . What are the values of , , and ?  Model this problem with a linear system. (You do not need to find the solution set of this linear system.)    For each part, determine whether the equations form a linear system.                        Determine whether or not each given list is a solution to this linear system. .                              Determine whether or not each given list is a solution to this linear system. .                        For the following linear systems, graph the solution set of each equation. Then graph the solution set of the linear system.                                    Writing Exercises   For each of the following, write an example of a linear system with the given property. (The system must be one you've not yet seen!) Explain why your example has the property.   The system has no solutions.    The system has exactly one solution.    The system has infinitely many solutions.       Consider an linear system and suppose that and are both solutions to this system. Under what conditions is also a solution to the same system? Explain.    Consider an linear system and suppose that and are both solutions to this system. Let be a real number. Prove that is also a solution to this same linear system.     "
},
{
  "id": "ex-coins",
  "level": "2",
  "url": "sec-intro-systems.html#ex-coins",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " Alex reaches into his pocket and pulls out a handful of coins. He tells us that he's holding 90 cents in his hand, consisting of only nickels (worth five cents each) and quarters (worth 25 cents each). How many coins of each type is Alex holding?  We can model this information with a linear equation. Let be the number of nickels in Alex's hand, and let be the number of quarters. The equation that captures the information Alex shared is .  In this case, we don't have enough information to answer Alex's question. It could be that Alex is holding three nickels and three quarters ( ) or that he is holding 13 nickels and one quarter ( ). There are quite a few solutions to equation . (Note that in this example, since it would not make sense to have only part of a coin, we need our values of and to be non-negative integers.)  Now imagine that Alex gives us additional information by telling us that he is holding exactly ten coins. We can put this information into a second linear equation, and we now have what is called a system of equations . We need to know what values of and satisfy the following equations simultaneously: .  A small amount of work shows us that the values and satisfy these equations simultaneously. (Though you may have been able to produce those numbers yourself, don't worry right now about where those numbers came from. We'll get there soon.) This means that Alex is holding eight nickels and two quarters.  "
},
{
  "id": "sec-intro-systems-5",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-5",
  "type": "Note",
  "number": "1.1.2",
  "title": "",
  "body": "We will use the symbol to denote the set of all real numbers. At the beginning of our work, we will be using as our set of numbers for almost everything. However, when we get to , we will move away from to a more general description of a set of numbers that works for solving linear equations. "
},
{
  "id": "def-lin-eqn",
  "level": "2",
  "url": "sec-intro-systems.html#def-lin-eqn",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  A linear equation in the variables is one which can be written in the form where the and are constants. The numbers all come from . In the special situation where , this is called a homogeneous linear equation . (Note that when there are only two variables in view we may use and instead of and ; similarly, when there are only three variables present, we may use , , and .)   "
},
{
  "id": "sec-intro-systems-8",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-8",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  The following are linear equations:  . These are all linear equations because every appearance of a variable term in these equations contains only a single variable raised to the first power.  The following are not linear equations: . These are not linear equations because each equation has at least one variable term with something other than a single variable to a single power.   "
},
{
  "id": "def-linear-system",
  "level": "2",
  "url": "sec-intro-systems.html#def-linear-system",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "  A system of linear equations is a collection of one or more equations involving the same variables. (We sometimes shorten this and refer to a linear system .) When all of these linear equations are homogeneous linear equations, this may be called a homogeneous linear system .   "
},
{
  "id": "sec-intro-systems-10",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-10",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Here is a system of linear equations involving the variables , , , and : . Note that not all variables need to be present in each equation. When a variable is missing, we consider that variable to have a zero coefficient in that equation. It may be convenient (and preferred) to align the terms with the same variables vertically, but when an equation lacks one of the variables this creates a blank horizontal space.   "
},
{
  "id": "def-solution-lin-system",
  "level": "2",
  "url": "sec-intro-systems.html#def-solution-lin-system",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": "  A solution to a system of linear equations in variables is a list of numbers, , such that when the corresponding variables are assigned these numeric values (plug in everywhere for , plug in everywhere for , and so on), all the equations are true statements. The set of all possible solutions is called the solution set of the linear system. Two linear systems are said to be equivalent if their solution sets are equal.   "
},
{
  "id": "sec-intro-systems-13",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-13",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Consider the following linear system: . A solution to this system is . (We use this notation to mean and .) We verify this claim by plugging these numbers in for the variables and checking that both equations turn out to be true. (In fact, this is the only solution to this system.)   "
},
{
  "id": "ex-lines",
  "level": "2",
  "url": "sec-intro-systems.html#ex-lines",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  We first consider the linear system consisting of two simple equations where the solution to each equation is a line in : . Readers will likely realize that the solution to this system happens when the graphs of these lines intersect. We see from the graph below that the intersection occurs at the point . Since this is the only intersection point, there is only one solution to this system.       We now consider a second linear system: . The graphs of these two lines appear below, but in this case the lines do not intersect at all because they are parallel. (The slope of both lines is .)       Here is a third linear system in two variables: . Each of these equations has a solution set whose graph is a line. In this particular case, we obtain the same line for both equations, which means that the linear system has an infinite number of solutions. Each one of the infinite solutions to the first equation is a solution to the second equation, and vice versa.        "
},
{
  "id": "def-consistent",
  "level": "2",
  "url": "sec-intro-systems.html#def-consistent",
  "type": "Definition",
  "number": "1.1.13",
  "title": "",
  "body": "  A system of linear equations is consistent if it has at least one solution. A system is inconsistent if it has no solutions. When a linear system has only one solution we say that the solution is unique .   "
},
{
  "id": "rqs-lin-systems-1",
  "level": "2",
  "url": "sec-intro-systems.html#rqs-lin-systems-1",
  "type": "Reading Question",
  "number": "1.1.1",
  "title": "",
  "body": " This question is designed to help you understand linear equations.   Write down an example of a linear equation involving the variables , , and .    Write down an example of an equation involving the variables , , and which is not linear.     "
},
{
  "id": "rqs-lin-systems-2",
  "level": "2",
  "url": "sec-intro-systems.html#rqs-lin-systems-2",
  "type": "Reading Question",
  "number": "1.1.2",
  "title": "",
  "body": " Find the solution set to the following linear system: .  "
},
{
  "id": "exer-coins",
  "level": "2",
  "url": "sec-intro-systems.html#exer-coins",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " Carlos has ten coins totalling . Each coin is either a nickel, a dime, or a quarter. He has twice as many nickels as he has quarters. How many of each coin does Carlos have?   Model this problem with a linear system. (You do not need to find the solution set of this linear system.)  "
},
{
  "id": "exer-quadratic",
  "level": "2",
  "url": "sec-intro-systems.html#exer-quadratic",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": " Suppose that is a function whose graph passes through the points , , and . What are the values of , , and ?  Model this problem with a linear system. (You do not need to find the solution set of this linear system.)  "
},
{
  "id": "sec-intro-systems-20-3",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-20-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " For each part, determine whether the equations form a linear system.                      "
},
{
  "id": "sec-intro-systems-20-4",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-20-4",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Determine whether or not each given list is a solution to this linear system. .                            "
},
{
  "id": "sec-intro-systems-20-5",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-20-5",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": " Determine whether or not each given list is a solution to this linear system. .                      "
},
{
  "id": "sec-intro-systems-20-6",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-20-6",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": " For the following linear systems, graph the solution set of each equation. Then graph the solution set of the linear system.                                  "
},
{
  "id": "sec-intro-systems-20-7-2",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-20-7-2",
  "type": "Exercise",
  "number": "1.1.7",
  "title": "",
  "body": " For each of the following, write an example of a linear system with the given property. (The system must be one you've not yet seen!) Explain why your example has the property.   The system has no solutions.    The system has exactly one solution.    The system has infinitely many solutions.     "
},
{
  "id": "sec-intro-systems-20-7-3",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-20-7-3",
  "type": "Exercise",
  "number": "1.1.8",
  "title": "",
  "body": " Consider an linear system and suppose that and are both solutions to this system. Under what conditions is also a solution to the same system? Explain.  "
},
{
  "id": "sec-intro-systems-20-7-4",
  "level": "2",
  "url": "sec-intro-systems.html#sec-intro-systems-20-7-4",
  "type": "Exercise",
  "number": "1.1.9",
  "title": "",
  "body": " Consider an linear system and suppose that and are both solutions to this system. Let be a real number. Prove that is also a solution to this same linear system.  "
},
{
  "id": "sec-matrices",
  "level": "1",
  "url": "sec-matrices.html",
  "type": "Section",
  "number": "1.2",
  "title": "Matrices",
  "body": " Matrices   In this section we will introduce matrices, one of the main computational tools in linear algebra. We will learn how to translate the information about a linear system to a matrix and then manipulate that matrix to solve the original system.   Some of the matrix manipulations later in this section may seem to come from nowhere. We intend this first example to motivate these upcoming operations.   Consider the following system of two linear equations in two variables: .  We first multiply both sides of the top equation by in order to get easier coefficients on our variables. After taking this action, we have the following equivalent linear system: .  We can now use the first equation to eliminate one of the variables in the second equation. If we add times the first equation to the second equation, we'll only have the variable left. The second equation is transformed, resulting in this equivalent linear system: .  We can now multiply both sides of Equation by to find that . Plugging this value in for in Equation quickly gives us . We have solved the linear system at this point, and we have determined that the only solution to the system is . (Readers should check that this is in fact a solution by plugging these values into the original linear equations.)    is much longer than it needs to be, and at this point some readers may wonder what they've gotten themselves into the mathematics so far (such as it is) is far from advanced. The real point of this example is to make explicit the operations used to solve a simple linear system. Once we have better notation and terminology, solving linear systems will be much faster (especially with the aid of technology). This is where matrices come in so handy.    A matrix is a rectangular array of numbers. If and are natural numbers, then an matrix is one with rows and columns. The entries in a matrix are referred to by their row and column numbers, so entry is the number in the th row and th column. (Row numbers increase from the top of the matrix down, and column numbers increase from the left of the matrix to the right.)  The main diagonal of a matrix refers to those entries on the -diagonal of the matrix starting at the upper left and going down to the right. In other words, an entry is on the main diagonal if and only if its row and column numbers are the same.  A submatrix of a matrix refers to the matrix that remains after removing one or more rows and\/or columns from a matrix.    Every system of linear equations generates two important matrices the coefficient matrix and the augmented matrix .    Given a system of linear equations in variables (hereafter, we will call this an linear system), , the coefficient matrix of the system is , and the augmented matrix of the system is . We form the augmented matrix by augmenting the coefficient matrix with the column of constants.    Note that the number of equations in the linear system corresponds to the number of rows of both the coefficient and augmented matrices, and the number of variables in the linear system corresponds to the number of columns in the coefficient matrix. (The augmented matrix of a linear system has one more column than the number of variables.)    For the linear system , the coefficient and augmented matrices are, respectively, . Note the in position as it corresponds to the absence of an term in the second equation of the linear system.    We must get comfortable switching between linear systems and their associated matrices. In particular, we need to understand why specific forms of matrices are especially useful when solving linear systems.    Consider the following matrix as the augmented matrix for a linear system: . In one sense, this is the best possible augmented matrix we could have for a linear system, because the solutions to the system are obvious. Translating this matrix back to equation form gives us , , and .    Almost no linear systems will come to us with an augmented matrix as simple as the one in . (This is mostly because such a linear system is, well, boring. It takes no work to solve a system like this.) Our goal, however, is to take any given linear system and manipulate its augmented matrix to be as close to this sort of matrix as we can get.  As we work with augmented matrices, we are restricted in the arithmetic we perform on them because, most of all, we want to preserve the solution sets of the corresponding linear systems. In our next definition, we describe the three legal ways we have to manipulate a matrix in this fashion.    The following operations on a matrix are called elementary row operations .   Add a multiple of one row to another row, replacing that second row with the result. (We will call this the replace row operation.)    Multiply every entry in a row by a nonzero constant. (We will call this the scale row operation.)    Switch the location of any two rows in the matrix. (We will call this the switch row operation.)   Two matrices are called row equivalent if there is a sequence of elementary row operations that transforms one matrix into the other.    When defining row equivalent in the previous definition, careful readers will note one implied fact that must be checked. The word equivalent brings to mind an equivalence relation , which includes the property of the relation being symmetric. Therefore, the definition implies that all of the elementary row operations are reversible that is, for each elementary row operation, there is an elementary row operation that reverses the change that was just made. This is something to prove! (See .)    Suppose that and are augmented matrices corresponding to systems of linear equations. Then if and are row equivalent, the linear systems to which they correspond are also equivalent.    We will prove this statement directly. Because elementary row operations only involve one or two rows of a matrix at a time, it is sufficient to prove this theorem for systems of two linear equations.  We suppose that we have the following linear system: , which produces the following augmented matrix: . Further, we suppose that is a solution to the linear system. If we apply the switch row operation to , this corresponds to writing the second equation above the first in the linear system. It is immediate that is still a solution to this system.  If we apply the scale row operation to , multiplying row 1 (without loss of generality) by a nonzero constant , then we have the matrix . We must show that is a solution to the corresponding linear system.  It is obvious that satisfies the second equation in this new linear system since that equation is unchanged. If satisfied the first equation of the original system, then . We can now show that satisfies the first equation of the second system by substitution: .  We must now show that the replace row operation preserves solutions. We let be a nonzero constant and we replace (without loss of generality) the second row of with the old second row plus times the first row. Here is the resulting matrix : . In the linear system which corresponds to , the first equation is unchanged from the first equation in the linear system that corresponds to , so we only need to be concerned with the second equation. By virtue of the fact that satisfied both equations of the first system, we know that and . We can now use this in the following calculation:   There is technically one more collection of facts to verify before this proof is complete. We have shown that, for all three elementary row operations, if is a solution to the linear system corresponding to then it will also be a solution to the linear system corresponding to (where is the result of applying one elementary row operation to ). But equivalent linear systems means that the solution sets are equal as sets . This means that we must assume we have a solution for the linear system corresponding to the matrix and show that it is a solution for the linear system corresponding to . We claim that this concern can be dispensed with by invoking another result in this section. Connecting the last dots of this proof is left to the reader in .    Roughly speaking, we want to use elementary row operations to transform the augmented matrix for a linear system into a matrix which has 1s along the main diagonal and 0s as the other entries in those columns. This is not always possible, and we will describe the situation more precisely below, but here is an example to illustrate the process.    We start by considering the following matrix as the augmented matrix of a linear system: . We first scale the first row by to produce a 1 in the entry: . We then replace the second row with the sum of the second row and three times the first row: . We will again use the 1 in the entry to eliminate the 5 in the entry. We replace the third row with times the first row plus the third: . Now that we have cleared out the entries under the entry, we can do the same for the 1 in the entry. (In future examples we may need to scale first to have a here.) We replace the third row with 5 times the second row plus the third: . We can now scale the third row by to produce 1s along the main diagonal: . We are halfway done, as we have 0s below the main diagonal. We now need to use elementary row operations to produce 0s above the main diagonal. We first replace the second row with times the third plus the second: . We can again use the 1 in the position to produce a 0 in the position. We replace the first row with times the third row plus the first: . Finally, we use the 1 in the entry to produce a 0 in the entry. We replace the first row with times the second row plus the first: . We now have the matrix in the form we wanted, because we can read off the solution: , , and .    We will now define and standardize this form of the augmented matrix that is so helpful in solving the related linear system. In what follows, by nonzero row (column) we mean a row (column) with at least one nonzero entry, and by the leading entry of a row we mean the row's leftmost nonzero entry.    A matrix is in row-echelon form (REF) if all of the following hold:  all rows of all zeros are collected at the bottom of the matrix;  each leading entry of a row is in a column to the right of the column of the leading entry for the row above it; and  all entries in a column below a leading entry are zeros.  If a matrix is in row-echelon form and also satisfies the following two conditions, it is in reduced row-echelon form (RREF):  each leading entry in a nonzero row is 1; and  each leading 1 is the only nonzero entry in its column.      Though that definition is a mouthful, it is useful. Here is an example showing some matrices that do and do not meet these criteria.    The following two matrices are in REF but not RREF: . The following two matrices are in RREF: . Neither of the following matrices are in REF or RREF: .      When a matrix is in row-echelon form, then the leading entry in each row is called a pivot . The location of this entry within the matrix is called a pivot position . Finally, any column containing a pivot is called a pivot column .    One of the reasons we have is because (we will prove this below) every matrix can be put into RREF. What follows here is a description of the algorithm used to transform every matrix into RREF. This process is usually called Gaussian elimination or Gauss-Jordan elimination.    The Row Reduction Algorithm   This row reduction algorithm consists of five steps. The first four (collectively) produce a matrix in row-echelon form; after the fifth step the matrix will be in reduced row-echelon form.  Start with the leftmost nonzero column. This will be a pivot column with the pivot position at the top.  Select a nonzero entry in this column and use the switch operation to move it to the top of the column (if necessary).  Use elementary row operations to create zeros below this pivot.  Ignore the row with the pivot just considered. Apply steps 1 3 to the submatrix that remains. Repeat this process until all nonzero rows have been handled.  Select the rightmost pivot and use the scale operation to make it a 1. Now use elementary row operations to create 0s above this pivot. Move upward and to the left, repeating this process for all remaining pivots.        We consider the following matrix and put it into reduced row-echelon form: .  The first column is nonzero, and we will leave the current top row in its place. Though it is not necessary to create a in the pivot position at this point in the process, it is often useful to do so. (We are not violating by producing a leading 1 this early in the process, but this is a step of row reduction that many, including this author, prefer to perform now to make future steps less painful.) We multiply the first row by to achieve this: .  We now use the in the position to create zeros in the column below it. We add times row 1 to row 2 and we add times row 1 to row 3. Since there is no interaction between these operations, we will perform them at the same time, though the reader should certainly take one operation at a time if this combination raises one's blood pressure: .  According to the algorithm, we now ignore row 1 and repeat the process for the remaining matrix. There is already a at the top of (this portion of) the second column, so we use that entry to create zeros below it. We add twice the second row to the third row: .  The matrix is in row-echelon form now, so we proceed to step 5 of the algorithm. We multiply the third row by to produce a in the position: .  We now use the we just created in order to produce zeros in the column above it. We add times the third row to the second, and we add times the third row to the first: .  The final step is to use the pivot in position in order to create a above it. We add times the second row to the first: .  The process is now complete, so the matrix in is the result of reducing to RREF.    We note that this example is different from in an important way. The matrix in corresponds to a system with three equations and four variables, while the matrix in corresponds to a system with three equations and three variables. We only mention this to point out that the size of the original matrix puts some restrictions on the possibilities for its RREF, and the reader should be aware of this when completing the reading questions and the exercises at the end of this section.     Write down the coefficient matrix and the augmented matrix for the following linear system: .    Although the reduced row-echelon form of a matrix is unique (we will prove this soon), the row-echelon form of a matrix is not unique. For the following matrix , write two distinct row-echelon forms: .    Put the following matrix into reduced row-echelon form. Record each of your steps along the way (both the elementary row operations you used and the matrices you obtained as a result): .      Write the augmented matrix that corresponds to the following linear system: .    Write the linear system that corresponds to the following matrix, assuming this is the augmented matrix of the system: .    For each of the following, describe the elementary row operation that was used to transform the matrix on the left into the matrix on the right. Be specific in your description of the operation. (You should not just answer scale or switch , etc.)                     For each of the following matrices, determine if the matrix is in row-echelon form, reduced row-echelon form, both, or neither.                          Consider the following matrix : . Find two distinct matrices and which are row equivalent to and are in row echelon form. (There are many correct answers!)    Use to put each of these matrices into RREF.                            For each of the following matrix sizes, list all of the possible RREFs for matrices of that size. Use the symbols for a pivot, for an unspecified number, and for a zero entry.                     Writing Exercises      Suppose is a matrix. What is the maximum number of pivots in any RREF of ? Explain.    Suppose is a matrix. What is the minimum number of rows of zeros in any RREF of ? Explain.       Prove that each of the elementary row operations is reversible. In other words, if an elementary row operation was used to transform a matrix into a matrix , prove that there is another elementary row operation (of the same type) which will transform back into .    Recall that an equivalence relation is reflexive, symmetric, and transitive. Now, fix the integers and and consider row equivalence as a relation on all matrices. Prove that this is an equivalence relation. (Hint: another exercise in this section may be helpful in your argument.)    Prove or disprove: The following two matrices are row equivalent. (Hint: another exercise in this section may be helpful in your argument.)      Complete the proof of . This can be accomplished by proving the statement in the final paragraph of the given proof.     "
},
{
  "id": "motivate-row-ops",
  "level": "2",
  "url": "sec-matrices.html#motivate-row-ops",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": " Consider the following system of two linear equations in two variables: .  We first multiply both sides of the top equation by in order to get easier coefficients on our variables. After taking this action, we have the following equivalent linear system: .  We can now use the first equation to eliminate one of the variables in the second equation. If we add times the first equation to the second equation, we'll only have the variable left. The second equation is transformed, resulting in this equivalent linear system: .  We can now multiply both sides of Equation by to find that . Plugging this value in for in Equation quickly gives us . We have solved the linear system at this point, and we have determined that the only solution to the system is . (Readers should check that this is in fact a solution by plugging these values into the original linear equations.)  "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-matrices.html#def-matrix",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  A matrix is a rectangular array of numbers. If and are natural numbers, then an matrix is one with rows and columns. The entries in a matrix are referred to by their row and column numbers, so entry is the number in the th row and th column. (Row numbers increase from the top of the matrix down, and column numbers increase from the left of the matrix to the right.)  The main diagonal of a matrix refers to those entries on the -diagonal of the matrix starting at the upper left and going down to the right. In other words, an entry is on the main diagonal if and only if its row and column numbers are the same.  A submatrix of a matrix refers to the matrix that remains after removing one or more rows and\/or columns from a matrix.   "
},
{
  "id": "sec-matrices-7",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix augmented matrix "
},
{
  "id": "def-aug-matrix",
  "level": "2",
  "url": "sec-matrices.html#def-aug-matrix",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  Given a system of linear equations in variables (hereafter, we will call this an linear system), , the coefficient matrix of the system is , and the augmented matrix of the system is . We form the augmented matrix by augmenting the coefficient matrix with the column of constants.   "
},
{
  "id": "ex-aug-matrix",
  "level": "2",
  "url": "sec-matrices.html#ex-aug-matrix",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  For the linear system , the coefficient and augmented matrices are, respectively, . Note the in position as it corresponds to the absence of an term in the second equation of the linear system.   "
},
{
  "id": "best-matrix",
  "level": "2",
  "url": "sec-matrices.html#best-matrix",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "  Consider the following matrix as the augmented matrix for a linear system: . In one sense, this is the best possible augmented matrix we could have for a linear system, because the solutions to the system are obvious. Translating this matrix back to equation form gives us , , and .   "
},
{
  "id": "def-el-row-ops",
  "level": "2",
  "url": "sec-matrices.html#def-el-row-ops",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  The following operations on a matrix are called elementary row operations .   Add a multiple of one row to another row, replacing that second row with the result. (We will call this the replace row operation.)    Multiply every entry in a row by a nonzero constant. (We will call this the scale row operation.)    Switch the location of any two rows in the matrix. (We will call this the switch row operation.)   Two matrices are called row equivalent if there is a sequence of elementary row operations that transforms one matrix into the other.   "
},
{
  "id": "thm-row-equiv-matrices-systems",
  "level": "2",
  "url": "sec-matrices.html#thm-row-equiv-matrices-systems",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "",
  "body": "  Suppose that and are augmented matrices corresponding to systems of linear equations. Then if and are row equivalent, the linear systems to which they correspond are also equivalent.    We will prove this statement directly. Because elementary row operations only involve one or two rows of a matrix at a time, it is sufficient to prove this theorem for systems of two linear equations.  We suppose that we have the following linear system: , which produces the following augmented matrix: . Further, we suppose that is a solution to the linear system. If we apply the switch row operation to , this corresponds to writing the second equation above the first in the linear system. It is immediate that is still a solution to this system.  If we apply the scale row operation to , multiplying row 1 (without loss of generality) by a nonzero constant , then we have the matrix . We must show that is a solution to the corresponding linear system.  It is obvious that satisfies the second equation in this new linear system since that equation is unchanged. If satisfied the first equation of the original system, then . We can now show that satisfies the first equation of the second system by substitution: .  We must now show that the replace row operation preserves solutions. We let be a nonzero constant and we replace (without loss of generality) the second row of with the old second row plus times the first row. Here is the resulting matrix : . In the linear system which corresponds to , the first equation is unchanged from the first equation in the linear system that corresponds to , so we only need to be concerned with the second equation. By virtue of the fact that satisfied both equations of the first system, we know that and . We can now use this in the following calculation:   There is technically one more collection of facts to verify before this proof is complete. We have shown that, for all three elementary row operations, if is a solution to the linear system corresponding to then it will also be a solution to the linear system corresponding to (where is the result of applying one elementary row operation to ). But equivalent linear systems means that the solution sets are equal as sets . This means that we must assume we have a solution for the linear system corresponding to the matrix and show that it is a solution for the linear system corresponding to . We claim that this concern can be dispensed with by invoking another result in this section. Connecting the last dots of this proof is left to the reader in .   "
},
{
  "id": "ex-use-el-ops",
  "level": "2",
  "url": "sec-matrices.html#ex-use-el-ops",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "  We start by considering the following matrix as the augmented matrix of a linear system: . We first scale the first row by to produce a 1 in the entry: . We then replace the second row with the sum of the second row and three times the first row: . We will again use the 1 in the entry to eliminate the 5 in the entry. We replace the third row with times the first row plus the third: . Now that we have cleared out the entries under the entry, we can do the same for the 1 in the entry. (In future examples we may need to scale first to have a here.) We replace the third row with 5 times the second row plus the third: . We can now scale the third row by to produce 1s along the main diagonal: . We are halfway done, as we have 0s below the main diagonal. We now need to use elementary row operations to produce 0s above the main diagonal. We first replace the second row with times the third plus the second: . We can again use the 1 in the position to produce a 0 in the position. We replace the first row with times the third row plus the first: . Finally, we use the 1 in the entry to produce a 0 in the entry. We replace the first row with times the second row plus the first: . We now have the matrix in the form we wanted, because we can read off the solution: , , and .   "
},
{
  "id": "def-REF",
  "level": "2",
  "url": "sec-matrices.html#def-REF",
  "type": "Definition",
  "number": "1.2.9",
  "title": "",
  "body": "  A matrix is in row-echelon form (REF) if all of the following hold:  all rows of all zeros are collected at the bottom of the matrix;  each leading entry of a row is in a column to the right of the column of the leading entry for the row above it; and  all entries in a column below a leading entry are zeros.  If a matrix is in row-echelon form and also satisfies the following two conditions, it is in reduced row-echelon form (RREF):  each leading entry in a nonzero row is 1; and  each leading 1 is the only nonzero entry in its column.     "
},
{
  "id": "sec-matrices-23",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-23",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  The following two matrices are in REF but not RREF: . The following two matrices are in RREF: . Neither of the following matrices are in REF or RREF: .   "
},
{
  "id": "def-pivots",
  "level": "2",
  "url": "sec-matrices.html#def-pivots",
  "type": "Definition",
  "number": "1.2.11",
  "title": "",
  "body": "  When a matrix is in row-echelon form, then the leading entry in each row is called a pivot . The location of this entry within the matrix is called a pivot position . Finally, any column containing a pivot is called a pivot column .   "
},
{
  "id": "alg-row-reduction",
  "level": "2",
  "url": "sec-matrices.html#alg-row-reduction",
  "type": "Algorithm",
  "number": "1.2.12",
  "title": "The Row Reduction Algorithm.",
  "body": " The Row Reduction Algorithm   This row reduction algorithm consists of five steps. The first four (collectively) produce a matrix in row-echelon form; after the fifth step the matrix will be in reduced row-echelon form.  Start with the leftmost nonzero column. This will be a pivot column with the pivot position at the top.  Select a nonzero entry in this column and use the switch operation to move it to the top of the column (if necessary).  Use elementary row operations to create zeros below this pivot.  Ignore the row with the pivot just considered. Apply steps 1 3 to the submatrix that remains. Repeat this process until all nonzero rows have been handled.  Select the rightmost pivot and use the scale operation to make it a 1. Now use elementary row operations to create 0s above this pivot. Move upward and to the left, repeating this process for all remaining pivots.     "
},
{
  "id": "ex-matrix-rref",
  "level": "2",
  "url": "sec-matrices.html#ex-matrix-rref",
  "type": "Example",
  "number": "1.2.13",
  "title": "",
  "body": "  We consider the following matrix and put it into reduced row-echelon form: .  The first column is nonzero, and we will leave the current top row in its place. Though it is not necessary to create a in the pivot position at this point in the process, it is often useful to do so. (We are not violating by producing a leading 1 this early in the process, but this is a step of row reduction that many, including this author, prefer to perform now to make future steps less painful.) We multiply the first row by to achieve this: .  We now use the in the position to create zeros in the column below it. We add times row 1 to row 2 and we add times row 1 to row 3. Since there is no interaction between these operations, we will perform them at the same time, though the reader should certainly take one operation at a time if this combination raises one's blood pressure: .  According to the algorithm, we now ignore row 1 and repeat the process for the remaining matrix. There is already a at the top of (this portion of) the second column, so we use that entry to create zeros below it. We add twice the second row to the third row: .  The matrix is in row-echelon form now, so we proceed to step 5 of the algorithm. We multiply the third row by to produce a in the position: .  We now use the we just created in order to produce zeros in the column above it. We add times the third row to the second, and we add times the third row to the first: .  The final step is to use the pivot in position in order to create a above it. We add times the second row to the first: .  The process is now complete, so the matrix in is the result of reducing to RREF.   "
},
{
  "id": "sec-matrices-29-1",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-29-1",
  "type": "Reading Question",
  "number": "1.2.1",
  "title": "",
  "body": " Write down the coefficient matrix and the augmented matrix for the following linear system: .  "
},
{
  "id": "sec-matrices-29-2",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-29-2",
  "type": "Reading Question",
  "number": "1.2.2",
  "title": "",
  "body": " Although the reduced row-echelon form of a matrix is unique (we will prove this soon), the row-echelon form of a matrix is not unique. For the following matrix , write two distinct row-echelon forms: .  "
},
{
  "id": "sec-matrices-29-3",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-29-3",
  "type": "Reading Question",
  "number": "1.2.3",
  "title": "",
  "body": " Put the following matrix into reduced row-echelon form. Record each of your steps along the way (both the elementary row operations you used and the matrices you obtained as a result): .  "
},
{
  "id": "sec-matrices-30-1",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " Write the augmented matrix that corresponds to the following linear system: .  "
},
{
  "id": "sec-matrices-30-2",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Write the linear system that corresponds to the following matrix, assuming this is the augmented matrix of the system: .  "
},
{
  "id": "sec-matrices-30-3",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": " For each of the following, describe the elementary row operation that was used to transform the matrix on the left into the matrix on the right. Be specific in your description of the operation. (You should not just answer scale or switch , etc.)                   "
},
{
  "id": "sec-matrices-30-4",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": " For each of the following matrices, determine if the matrix is in row-echelon form, reduced row-echelon form, both, or neither.                        "
},
{
  "id": "sec-matrices-30-5",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": " Consider the following matrix : . Find two distinct matrices and which are row equivalent to and are in row echelon form. (There are many correct answers!)  "
},
{
  "id": "sec-matrices-30-6",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-6",
  "type": "Exercise",
  "number": "1.2.6",
  "title": "",
  "body": " Use to put each of these matrices into RREF.                          "
},
{
  "id": "sec-matrices-30-7",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-7",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "",
  "body": " For each of the following matrix sizes, list all of the possible RREFs for matrices of that size. Use the symbols for a pivot, for an unspecified number, and for a zero entry.                   "
},
{
  "id": "sec-matrices-30-8-2",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-8-2",
  "type": "Exercise",
  "number": "1.2.8",
  "title": "",
  "body": "    Suppose is a matrix. What is the maximum number of pivots in any RREF of ? Explain.    Suppose is a matrix. What is the minimum number of rows of zeros in any RREF of ? Explain.     "
},
{
  "id": "exer-reversible",
  "level": "2",
  "url": "sec-matrices.html#exer-reversible",
  "type": "Exercise",
  "number": "1.2.9",
  "title": "",
  "body": " Prove that each of the elementary row operations is reversible. In other words, if an elementary row operation was used to transform a matrix into a matrix , prove that there is another elementary row operation (of the same type) which will transform back into .  "
},
{
  "id": "exer-row-equiv-equiv-rel",
  "level": "2",
  "url": "sec-matrices.html#exer-row-equiv-equiv-rel",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "",
  "body": " Recall that an equivalence relation is reflexive, symmetric, and transitive. Now, fix the integers and and consider row equivalence as a relation on all matrices. Prove that this is an equivalence relation. (Hint: another exercise in this section may be helpful in your argument.)  "
},
{
  "id": "sec-matrices-30-8-5",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-30-8-5",
  "type": "Exercise",
  "number": "1.2.11",
  "title": "",
  "body": " Prove or disprove: The following two matrices are row equivalent. (Hint: another exercise in this section may be helpful in your argument.)    "
},
{
  "id": "exer-finish-proof-1",
  "level": "2",
  "url": "sec-matrices.html#exer-finish-proof-1",
  "type": "Exercise",
  "number": "1.2.12",
  "title": "",
  "body": " Complete the proof of . This can be accomplished by proving the statement in the final paragraph of the given proof.  "
},
{
  "id": "sec-results",
  "level": "1",
  "url": "sec-results.html",
  "type": "Section",
  "number": "1.3",
  "title": "Results",
  "body": " Results   In the previous section, we learned how to write the augmented matrix of a linear system and provided a process to reduce any matrix to RREF. In this section, we will learn how to use the RREF of a matrix to solve the corresponding linear system. We will also prove some important results related to these solutions.   We first introduce some terminology. These terms relate what we saw in back to the corresponding linear systems.    Suppose that is the coefficient matrix corresponding to a system of linear equations and that is in REF. Then a variable corresponding to a pivot column in is called a basic variable (or pivot variable ), and a variable corresponding to a non-pivot column in is called a free variable .     Note that in this definition is the coefficient matrix (not the augmented matrix) of the linear system. We are using the coefficient matrix because we are making a definition concerning variables, and the rightmost column in the augmented matrix does not correspond to a variable in the linear system.   The augmented matrix of an linear system is of size . This puts some limitations on the different reduced row-echelon forms that we could see in this context. In the following two examples, we will consider specific reduced row-echelon forms and what they say about the linear systems to which they correspond.    Consider the following as the augmented matrix corresponding to a system of linear equations: . This is a matrix, so the original linear system has three equations and three variables. Hopefully the reader can see that this matrix is indeed in RREF. (Consult for a refresher.)  We will now write the equations which correspond to each row of the matrix, and we will pay special attention to the final row: . Usually we omit terms in linear equations when the coefficient is , but we are including those terms here to make a point. When the coefficient of a variable is , the entire linear term disappears since no value of the variable could make the product with the coefficient anything other than . This means that each of these equations can be written in a more simple form. In particular, the third equation can be written as .  This may feel rather elementary, but there are no possible variable values to make a true statement. It is false all of the time . Since we are searching for values of the variables which satisfy all the equations simultaneously, and since one of the equations has no solution, the linear system has no solution. This is an inconsistent linear system.  We proved in that row-equivalent matrices correspond to equivalent linear systems. Therefore, we can say that the original linear system for this example is inconsistent.    What we saw in we will be able to generalize (see ) in our effort to categorize inconsistent linear systems. Before we do that, let's look at an augmented matrix which has a different RREF.    Consider the following matrix as the augmented matrix of a linear system: . (Again, the reader should verify that this matrix is in reduced row-echelon form.)  The final row of this matrix corresponds to the equation . Since this equation is true all the time, for all values of the involved variables, we won't consider it any longer as it places no further restrictions on the solutions.  The first two rows of correspond to the following two linear equations: .  From , we see that in this system and are basic variables and is a free variable. What does that mean for the solutions of this system? We call  free because any element of that we put into will produce a solution for this system. The variable is free to take on any value, and then the values of the basic variables and are determined by that value and the linear equations.  For example, in this system of equations, if , then and , giving as a solution to the linear system. If , then and , giving as a solution to the system. Since can take on any value in , and since we have a solution to the system for each value of , this means we have a solution to the system for each element of . We conclude that there are an infinite number of solutions to this system.  The solutions to this linear system can be written in a number of ways. We will prefer the following form: This is called a parametric description of the solution set. Sometimes solutions like this are written with the letter or in place of to better match the usage of the word parameter elsewhere. We will follow the convention of using the free variables as parameters in our solutions.    In , we saw that having a free variable corresponded to having an infinite number of solutions. But we need to be careful about our conclusions, because there was also a free variable ( ) in , and in that case there were no solutions to the system. A free variable only indicates an infinite number of solutions when the system is consistent.  The two previous examples, combined with , give us a sense of what solutions to linear systems can look like given certain characteristics of the augmented matrices. We can now state in theorem form what we observed to be true in these examples.    Suppose is the augmented matrix of a linear system, and suppose that is in reduced row-echelon form. Then the linear system is consistent if and only if there is no pivot in the final column of .    We note that the pivot columns do not change when a matrix goes from row-echelon form to reduced row-echelon form (see ), so we are not losing any generality with our assumption that is in RREF.  This theorem is a biconditional statement, and we will prove one implication directly. We assume there is no pivot in the final column of . Then when we consider the linear equations which correspond to the rows of , we see that each of the basic variables can be written in terms of the free variables, if any free variables exist. If no free variables exist, then all basic variables have an assigned value and the system is consistent. In the case that there is at least one free variable, we can pick an element of let's say, to assign to each of the free variables. This produces a solution to the linear system, and our system is consistent.  We will prove the contrapositive of the other implication. If there is a pivot in the final column of , then the corresponding linear equation reduces to . This means that there is no solution to the linear system, so the system is inconsistent.    Given that two major questions about the solutions to linear systems involve consistency and uniqueness , the next natural theorem to consider is related to this second concept.    Suppose that is the augmented matrix corresponding to a consistent linear system, and suppose that is in reduced row-echelon form. Then the system has a unique solution if and only if there is a pivot in each of the first columns of .    As with the proof of , we are not losing any generality by assuming that is in RREF.  We first suppose that there is a pivot in each of the first columns of ; this implies that . We also recall that the linear system is assumed to be consistent, meaning that the first rows of have the following form: . (The matrix may have rows of all zeros below the rows here, but that will not affect our discussion.)  If the matrix has the form we have just detailed, then the original linear system is equivalent to one with equations of the form , , , . That is, the system has a unique solution.  We will prove the contrapositive of the other implication. We suppose that there is at least one free variable (call it ) in the linear system. We recall (see ) that when the matrix for a consistent system is in RREF, all solutions can be written by expressing basic variables in terms of any existing free variables. Therefore, this system has a solution in which all free variables are set equal to . Further, this system has a solution in which all free variables except are set equal to and . This may not change the value of any of the basic variables, and there may not be any free variables aside from , but these two solutions we have just described are not the same since has a different value in each one. Therefore, this system has more than one solution, meaning that the system does not have a unique solution.      If and are natural numbers and , then an linear system cannot have a unique solution.    Suppose is the augmented matrix corresponding to an linear system with . The RREF of can have at most pivots, so by the system cannot have a unique solution.    There are two natural definitions related to which we now state.    An linear system is called underdetermined if . An linear system is called overdetermined if .    The two previous theorems provide the last step to an algorithm for solving any linear system.   Algorithm for Solving Linear Systems   Suppose that we have an system of linear equations. Here are the steps to solve the system.  Form the augmented matrix of the linear system. We will call this matrix .  Find the reduced row-echelon form of . (If is small, this can be done by hand; if is not small, technology should be used to complete this step.)  Determine whether or not the system is consistent by observing the location of the pivots in the RREF of . If there is a pivot in the rightmost column, the linear system is inconsistent and we need not proceed any further in the algorithm. If there is no pivot in the rightmost column, the system is consistent.  Determine whether or not the system has a unique solution. If there is a pivot in each of the first columns, then the system has a unique solution which can be recorded. If there is not a pivot in each of the first columns, then the system does not have a unique solution; in this case, a parametric description of the solution set can be recorded.      The earlier examples in this section can be completed using this algorithm. We will include an additional example so the reader can practice using the algorithm once more.    Consider the following linear system: . Does this system have a solution? If the system has a solution, write down the solution.    We follow and form the augmented matrix for this system. When we row reduce this matrix, we find . We will refer to the RREF of as . Since has no pivot in the rightmost column, our linear system is consistent. Secondly, since has a pivot in each of the first three columns, the solution to our linear system is unique. We record this solution as , , and .    The rest of this section will be devoted to proving , which states that the RREF of a matrix is unique. (There are actually a couple of places so far in this section where we have been a bit sloppy and referred to the RREF of a matrix, but in each of these cases the uniqueness of the RREF was not essential to the argument.)  We will begin with a lemma. (Our approach to proving has been heavily influenced by Kuttler's treatment .)    In a consistent linear system, all solutions can be expressed by writing the basic variables as linear functions of the free variables (if they exist). Further, each basic variable can be written as a linear function of only those free variables with .    The first sentence in this lemma has essentially been proved in the discussion within . We will prove the second statement directly. We consider as the augmented matrix of a consistent linear system. Suppose is row equivalent to , where is in RREF. Recall that part of the definition of RREF ( ) is that pivots are the leftmost non-zero number in their row.  Consider the linear equation corresponding to row of ; this equation will begin with a basic variable and will possibly involve other variables , with , before the equals sign. However, all of these other variables will be free variables, because any other basic variable , with , will correspond to a column in which that pivot is the only non-zero number. In other words, all entries along row in which correspond to pivot columns , for , will be zero.    The basic idea for the proof of is to prove the result for homogeneous linear systems first and then to obtain the proof for general linear systems as an extension. We turn to our first result about homogeneous linear systems. (For a refresher on homogeneous systems, see .)    If is a basic variable of a homogeneous linear system, then any solution of the system with for all free variables with , must have .    We will prove this directly. Suppose that is a basic variable of a homogeneous linear system and that in a solution of this system, for all free variables with . From we know that in the description of the solution to this system, will be written as a linear function of the free variables with larger indices. But the nature of a homogeneous linear system demands that such a linear function will involve only free variables and no constants (the constants are all ). Therefore, if for all free variables with , we must have as well.    We will now prove the uniqueness result for augmented matrices of homogeneous systems. (We should note here, perhaps, that while we introduced the notions of REF and RREF for augmented matrices, the row reduction algorithm can be applied to any matrix at all.)    Let be the augmented matrix corresponding to a homogeneous linear system. Suppose that is row equivalent to matrices and , both of which are in reduced row-echelon form. Then .    We proceed by contradiction and assume that . Since and are row equivalent and both are in RREF, they must have the same pivot positions. (The reader is asked to prove this in .) Since , these matrices must differ in some row, call it row . Since and have the same pivot positions, we assume there is a pivot in column of row in both matrices. There must be some position , with , such that . The variable must not be a basic variable in the linear system, because if so, we would have . So is a free variable.  Homogeneous linear systems are always consistent. (The reader is asked to prove this in .) There must exist a solution to the linear system where and all other free variables take on the value of . In this solution, using the linear equations that correspond to the rows in , we solve and obtain . Using the linear equations that correspond to the rows in , we find . Since a solution is completely determined by the values of the free variables, this implies that , which is a contradiction.    With this proposition in hand, we can state and prove our first large result.    Let be an matrix and let be row equivalent to both and . If and are in reduced row-echelon form, then .    We first form the matrix by augmenting the matrix with an additional column on the right consisting of all zeros. We similarly form the matrices and from and . We note that and are also in RREF and they are obtained from using the same row operations that reduced to and .  We can consider , , and as augmented matrices corresponding to homogeneous linear systems. By , since is row equivalent to both and , where both and are in RREF, we must have . By the construction of and , this implies .      Consider the following linear system: . Determine which of the variables are basic variables and which are free variables. Explain your answer.     Consider the following linear system: . Write a parametric description of the solution set of this system. (Follow .)       In each of the following, suppose the augmented matrix for a linear system has been reduced to the following RREF. Write down the solution(s) to the system (if they exist).                          Solve the following linear system.      Solve the following linear systems.                              Determine the values of for which the following linear system has no solutions, exactly one solution, or infinitely many solutions. Explain your answers.      Under what conditions is the following linear system consistent? Your answer should be an equation or equations that must be satisfied by the . Explain your answer.     Solve the following system for , , and . (Hint: define new variables to produce a linear system.) Explain your solution.      Answer the question posed in by solving the linear system that was created in that exercise.    Answer the question posed in by solving the linear system that was created in that exercise.    Suppose that the graph of the function passes through the points , , , and . Determine the values of , , , and .    Writing Exercises   Prove that every homogeneous linear system is consistent.    If is a matrix whose final column is all zeros, what is the maximum possible number of parameters in the solution of the linear system which has augmented matrix ? Explain your answer.       Prove that if , then the reduced row-echelon form of is .    Use part (a) to prove that if , then the linear system has exactly one solution.       Explain why every linear system over has either no solutions, exactly one solution, or an infinite number of solutions.    Suppose that a coefficient matrix for a linear system has three pivot columns. Is the system consistent? Explain.    What would you have to know about the pivot columns in an augmented matrix in order to know that the linear system has exactly one solution? Explain.    Suppose that matrices and are row equivalent and both matrices are in REF. Prove that and have the same pivot positions.     "
},
{
  "id": "def-free-vars",
  "level": "2",
  "url": "sec-results.html#def-free-vars",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Suppose that is the coefficient matrix corresponding to a system of linear equations and that is in REF. Then a variable corresponding to a pivot column in is called a basic variable (or pivot variable ), and a variable corresponding to a non-pivot column in is called a free variable .   "
},
{
  "id": "sec-results-5",
  "level": "2",
  "url": "sec-results.html#sec-results-5",
  "type": "Note",
  "number": "1.3.2",
  "title": "",
  "body": " Note that in this definition is the coefficient matrix (not the augmented matrix) of the linear system. We are using the coefficient matrix because we are making a definition concerning variables, and the rightmost column in the augmented matrix does not correspond to a variable in the linear system.  "
},
{
  "id": "ex-matrix-inconsistent",
  "level": "2",
  "url": "sec-results.html#ex-matrix-inconsistent",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Consider the following as the augmented matrix corresponding to a system of linear equations: . This is a matrix, so the original linear system has three equations and three variables. Hopefully the reader can see that this matrix is indeed in RREF. (Consult for a refresher.)  We will now write the equations which correspond to each row of the matrix, and we will pay special attention to the final row: . Usually we omit terms in linear equations when the coefficient is , but we are including those terms here to make a point. When the coefficient of a variable is , the entire linear term disappears since no value of the variable could make the product with the coefficient anything other than . This means that each of these equations can be written in a more simple form. In particular, the third equation can be written as .  This may feel rather elementary, but there are no possible variable values to make a true statement. It is false all of the time . Since we are searching for values of the variables which satisfy all the equations simultaneously, and since one of the equations has no solution, the linear system has no solution. This is an inconsistent linear system.  We proved in that row-equivalent matrices correspond to equivalent linear systems. Therefore, we can say that the original linear system for this example is inconsistent.   "
},
{
  "id": "ex-matrix-inf-solns",
  "level": "2",
  "url": "sec-results.html#ex-matrix-inf-solns",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Consider the following matrix as the augmented matrix of a linear system: . (Again, the reader should verify that this matrix is in reduced row-echelon form.)  The final row of this matrix corresponds to the equation . Since this equation is true all the time, for all values of the involved variables, we won't consider it any longer as it places no further restrictions on the solutions.  The first two rows of correspond to the following two linear equations: .  From , we see that in this system and are basic variables and is a free variable. What does that mean for the solutions of this system? We call  free because any element of that we put into will produce a solution for this system. The variable is free to take on any value, and then the values of the basic variables and are determined by that value and the linear equations.  For example, in this system of equations, if , then and , giving as a solution to the linear system. If , then and , giving as a solution to the system. Since can take on any value in , and since we have a solution to the system for each value of , this means we have a solution to the system for each element of . We conclude that there are an infinite number of solutions to this system.  The solutions to this linear system can be written in a number of ways. We will prefer the following form: This is called a parametric description of the solution set. Sometimes solutions like this are written with the letter or in place of to better match the usage of the word parameter elsewhere. We will follow the convention of using the free variables as parameters in our solutions.   "
},
{
  "id": "thm-consistent-system",
  "level": "2",
  "url": "sec-results.html#thm-consistent-system",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "",
  "body": "  Suppose is the augmented matrix of a linear system, and suppose that is in reduced row-echelon form. Then the linear system is consistent if and only if there is no pivot in the final column of .    We note that the pivot columns do not change when a matrix goes from row-echelon form to reduced row-echelon form (see ), so we are not losing any generality with our assumption that is in RREF.  This theorem is a biconditional statement, and we will prove one implication directly. We assume there is no pivot in the final column of . Then when we consider the linear equations which correspond to the rows of , we see that each of the basic variables can be written in terms of the free variables, if any free variables exist. If no free variables exist, then all basic variables have an assigned value and the system is consistent. In the case that there is at least one free variable, we can pick an element of let's say, to assign to each of the free variables. This produces a solution to the linear system, and our system is consistent.  We will prove the contrapositive of the other implication. If there is a pivot in the final column of , then the corresponding linear equation reduces to . This means that there is no solution to the linear system, so the system is inconsistent.   "
},
{
  "id": "thm-unique-soln-system",
  "level": "2",
  "url": "sec-results.html#thm-unique-soln-system",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "",
  "body": "  Suppose that is the augmented matrix corresponding to a consistent linear system, and suppose that is in reduced row-echelon form. Then the system has a unique solution if and only if there is a pivot in each of the first columns of .    As with the proof of , we are not losing any generality by assuming that is in RREF.  We first suppose that there is a pivot in each of the first columns of ; this implies that . We also recall that the linear system is assumed to be consistent, meaning that the first rows of have the following form: . (The matrix may have rows of all zeros below the rows here, but that will not affect our discussion.)  If the matrix has the form we have just detailed, then the original linear system is equivalent to one with equations of the form , , , . That is, the system has a unique solution.  We will prove the contrapositive of the other implication. We suppose that there is at least one free variable (call it ) in the linear system. We recall (see ) that when the matrix for a consistent system is in RREF, all solutions can be written by expressing basic variables in terms of any existing free variables. Therefore, this system has a solution in which all free variables are set equal to . Further, this system has a solution in which all free variables except are set equal to and . This may not change the value of any of the basic variables, and there may not be any free variables aside from , but these two solutions we have just described are not the same since has a different value in each one. Therefore, this system has more than one solution, meaning that the system does not have a unique solution.   "
},
{
  "id": "cor-underdetermined-system",
  "level": "2",
  "url": "sec-results.html#cor-underdetermined-system",
  "type": "Corollary",
  "number": "1.3.7",
  "title": "",
  "body": "  If and are natural numbers and , then an linear system cannot have a unique solution.    Suppose is the augmented matrix corresponding to an linear system with . The RREF of can have at most pivots, so by the system cannot have a unique solution.   "
},
{
  "id": "def-under-overdetermined",
  "level": "2",
  "url": "sec-results.html#def-under-overdetermined",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  An linear system is called underdetermined if . An linear system is called overdetermined if .   "
},
{
  "id": "alg-solving-system",
  "level": "2",
  "url": "sec-results.html#alg-solving-system",
  "type": "Algorithm",
  "number": "1.3.9",
  "title": "Algorithm for Solving Linear Systems.",
  "body": " Algorithm for Solving Linear Systems   Suppose that we have an system of linear equations. Here are the steps to solve the system.  Form the augmented matrix of the linear system. We will call this matrix .  Find the reduced row-echelon form of . (If is small, this can be done by hand; if is not small, technology should be used to complete this step.)  Determine whether or not the system is consistent by observing the location of the pivots in the RREF of . If there is a pivot in the rightmost column, the linear system is inconsistent and we need not proceed any further in the algorithm. If there is no pivot in the rightmost column, the system is consistent.  Determine whether or not the system has a unique solution. If there is a pivot in each of the first columns, then the system has a unique solution which can be recorded. If there is not a pivot in each of the first columns, then the system does not have a unique solution; in this case, a parametric description of the solution set can be recorded.     "
},
{
  "id": "examp-lin-system-use-alg",
  "level": "2",
  "url": "sec-results.html#examp-lin-system-use-alg",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  Consider the following linear system: . Does this system have a solution? If the system has a solution, write down the solution.    We follow and form the augmented matrix for this system. When we row reduce this matrix, we find . We will refer to the RREF of as . Since has no pivot in the rightmost column, our linear system is consistent. Secondly, since has a pivot in each of the first three columns, the solution to our linear system is unique. We record this solution as , , and .   "
},
{
  "id": "lem-solns-free-vars",
  "level": "2",
  "url": "sec-results.html#lem-solns-free-vars",
  "type": "Lemma",
  "number": "1.3.11",
  "title": "",
  "body": "  In a consistent linear system, all solutions can be expressed by writing the basic variables as linear functions of the free variables (if they exist). Further, each basic variable can be written as a linear function of only those free variables with .    The first sentence in this lemma has essentially been proved in the discussion within . We will prove the second statement directly. We consider as the augmented matrix of a consistent linear system. Suppose is row equivalent to , where is in RREF. Recall that part of the definition of RREF ( ) is that pivots are the leftmost non-zero number in their row.  Consider the linear equation corresponding to row of ; this equation will begin with a basic variable and will possibly involve other variables , with , before the equals sign. However, all of these other variables will be free variables, because any other basic variable , with , will correspond to a column in which that pivot is the only non-zero number. In other words, all entries along row in which correspond to pivot columns , for , will be zero.   "
},
{
  "id": "lem-homog-free-zero",
  "level": "2",
  "url": "sec-results.html#lem-homog-free-zero",
  "type": "Lemma",
  "number": "1.3.12",
  "title": "",
  "body": "  If is a basic variable of a homogeneous linear system, then any solution of the system with for all free variables with , must have .    We will prove this directly. Suppose that is a basic variable of a homogeneous linear system and that in a solution of this system, for all free variables with . From we know that in the description of the solution to this system, will be written as a linear function of the free variables with larger indices. But the nature of a homogeneous linear system demands that such a linear function will involve only free variables and no constants (the constants are all ). Therefore, if for all free variables with , we must have as well.   "
},
{
  "id": "prop-result-for-homog-systems",
  "level": "2",
  "url": "sec-results.html#prop-result-for-homog-systems",
  "type": "Proposition",
  "number": "1.3.13",
  "title": "",
  "body": "  Let be the augmented matrix corresponding to a homogeneous linear system. Suppose that is row equivalent to matrices and , both of which are in reduced row-echelon form. Then .    We proceed by contradiction and assume that . Since and are row equivalent and both are in RREF, they must have the same pivot positions. (The reader is asked to prove this in .) Since , these matrices must differ in some row, call it row . Since and have the same pivot positions, we assume there is a pivot in column of row in both matrices. There must be some position , with , such that . The variable must not be a basic variable in the linear system, because if so, we would have . So is a free variable.  Homogeneous linear systems are always consistent. (The reader is asked to prove this in .) There must exist a solution to the linear system where and all other free variables take on the value of . In this solution, using the linear equations that correspond to the rows in , we solve and obtain . Using the linear equations that correspond to the rows in , we find . Since a solution is completely determined by the values of the free variables, this implies that , which is a contradiction.   "
},
{
  "id": "thm-rref-unique",
  "level": "2",
  "url": "sec-results.html#thm-rref-unique",
  "type": "Theorem",
  "number": "1.3.14",
  "title": "",
  "body": "  Let be an matrix and let be row equivalent to both and . If and are in reduced row-echelon form, then .    We first form the matrix by augmenting the matrix with an additional column on the right consisting of all zeros. We similarly form the matrices and from and . We note that and are also in RREF and they are obtained from using the same row operations that reduced to and .  We can consider , , and as augmented matrices corresponding to homogeneous linear systems. By , since is row equivalent to both and , where both and are in RREF, we must have . By the construction of and , this implies .   "
},
{
  "id": "sec-results-31-1",
  "level": "2",
  "url": "sec-results.html#sec-results-31-1",
  "type": "Reading Question",
  "number": "1.3.1",
  "title": "",
  "body": " Consider the following linear system: . Determine which of the variables are basic variables and which are free variables. Explain your answer.   "
},
{
  "id": "sec-results-31-2",
  "level": "2",
  "url": "sec-results.html#sec-results-31-2",
  "type": "Reading Question",
  "number": "1.3.2",
  "title": "",
  "body": " Consider the following linear system: . Write a parametric description of the solution set of this system. (Follow .)   "
},
{
  "id": "sec-results-32-1",
  "level": "2",
  "url": "sec-results.html#sec-results-32-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": " In each of the following, suppose the augmented matrix for a linear system has been reduced to the following RREF. Write down the solution(s) to the system (if they exist).                        "
},
{
  "id": "sec-results-32-2",
  "level": "2",
  "url": "sec-results.html#sec-results-32-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": " Solve the following linear system.    "
},
{
  "id": "sec-results-32-3",
  "level": "2",
  "url": "sec-results.html#sec-results-32-3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": " Solve the following linear systems.                            "
},
{
  "id": "sec-results-32-4",
  "level": "2",
  "url": "sec-results.html#sec-results-32-4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": " Determine the values of for which the following linear system has no solutions, exactly one solution, or infinitely many solutions. Explain your answers.    "
},
{
  "id": "sec-results-32-5",
  "level": "2",
  "url": "sec-results.html#sec-results-32-5",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": " Under what conditions is the following linear system consistent? Your answer should be an equation or equations that must be satisfied by the . Explain your answer.   "
},
{
  "id": "sec-results-32-6",
  "level": "2",
  "url": "sec-results.html#sec-results-32-6",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": " Solve the following system for , , and . (Hint: define new variables to produce a linear system.) Explain your solution.    "
},
{
  "id": "sec-results-32-7",
  "level": "2",
  "url": "sec-results.html#sec-results-32-7",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": " Answer the question posed in by solving the linear system that was created in that exercise.  "
},
{
  "id": "sec-results-32-8",
  "level": "2",
  "url": "sec-results.html#sec-results-32-8",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": " Answer the question posed in by solving the linear system that was created in that exercise.  "
},
{
  "id": "sec-results-32-9",
  "level": "2",
  "url": "sec-results.html#sec-results-32-9",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": " Suppose that the graph of the function passes through the points , , , and . Determine the values of , , , and .  "
},
{
  "id": "exer-homog-consist",
  "level": "2",
  "url": "sec-results.html#exer-homog-consist",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": " Prove that every homogeneous linear system is consistent.  "
},
{
  "id": "sec-results-32-10-3",
  "level": "2",
  "url": "sec-results.html#sec-results-32-10-3",
  "type": "Exercise",
  "number": "1.3.11",
  "title": "",
  "body": " If is a matrix whose final column is all zeros, what is the maximum possible number of parameters in the solution of the linear system which has augmented matrix ? Explain your answer.  "
},
{
  "id": "exer-2b2-det",
  "level": "2",
  "url": "sec-results.html#exer-2b2-det",
  "type": "Exercise",
  "number": "1.3.12",
  "title": "",
  "body": "    Prove that if , then the reduced row-echelon form of is .    Use part (a) to prove that if , then the linear system has exactly one solution.     "
},
{
  "id": "sec-results-32-10-5",
  "level": "2",
  "url": "sec-results.html#sec-results-32-10-5",
  "type": "Exercise",
  "number": "1.3.13",
  "title": "",
  "body": " Explain why every linear system over has either no solutions, exactly one solution, or an infinite number of solutions.  "
},
{
  "id": "sec-results-32-10-6",
  "level": "2",
  "url": "sec-results.html#sec-results-32-10-6",
  "type": "Exercise",
  "number": "1.3.14",
  "title": "",
  "body": " Suppose that a coefficient matrix for a linear system has three pivot columns. Is the system consistent? Explain.  "
},
{
  "id": "sec-results-32-10-7",
  "level": "2",
  "url": "sec-results.html#sec-results-32-10-7",
  "type": "Exercise",
  "number": "1.3.15",
  "title": "",
  "body": " What would you have to know about the pivot columns in an augmented matrix in order to know that the linear system has exactly one solution? Explain.  "
},
{
  "id": "exer-same-pivots",
  "level": "2",
  "url": "sec-results.html#exer-same-pivots",
  "type": "Exercise",
  "number": "1.3.16",
  "title": "",
  "body": " Suppose that matrices and are row equivalent and both matrices are in REF. Prove that and have the same pivot positions.  "
},
{
  "id": "sec-vectors",
  "level": "1",
  "url": "sec-vectors.html",
  "type": "Section",
  "number": "1.4",
  "title": "Vectors",
  "body": " Vectors   Up to this point in the chapter, we have been concerned with solving systems of linear equations, and we have used the tool of matrices to great effect. In this section we will connect linear systems to some basic geometric concepts, and this will result in alternate ways of writing linear systems which, at times, will be more helpful.    The Basics of Vectors  Although we will shortly connect vectors to geometric notions, at the beginning a vector will be strictly an algebraic object.    An -dimensional vector over is an ordered list of real numbers. We will adopt the convention that, unless stated otherwise, vectors are column vectors written in this form: , where for all . (Column vectors are therefore matrices with a single column.) The set of all -dimensional vectors over is denoted .     We say that two vectors and in are equal if for each . This means that an equation involving vectors in captures the same information as equations involving real numbers.   As we have said, vectors should be thought of first as algebraic objects, and there are several ways to combine these objects.    We can combine and modify vectors through addition and a form of multiplication. We will describe the multiplication first.  Let have the form , and let . Then the scalar multiple of by is the vector in obtained by multiplying each entry of by ; that is, . In this context, we will often refer to real numbers as scalars .  If and are vectors in with the form , then the sum of and is the vector in obtained by adding the corresponding entries in and . That is, .     We will use the notation to denote the zero vector that is, the vector in whose entries are all . We will also use the notation to indicate the scalar multiple .   We present some quick calculations in the following example.    Let and let such that . Then we can calculate and using : .    When combining vectors, we are limited to adding vectors of the same dimension that is, vectors with the same number of entries. However, we are not limited to either addition or scalar multiplication; we can certainly do both at once. Nor are we limited to adding only two vectors at a time. The following definition provides the correct generalization.    Let be real numbers and let . Then the linear combination of the vectors with weights  is .  The span of the vectors is the set of all possible linear combinations of and is written . In other words, the span is defined to be .      Taking and from , we can calculate the linear combination of these vectors with weights and : .     We have defined addition and scalar multiplication for vectors here, but these concepts also make sense for matrices. We will set the stage briefly here for a return in .  If we think of an matrix in terms of its columns, then the columns of are all vectors in . For two matrices and , we define the sum in this way: column of is the sum of the two vectors in which are the th columns of and . Similarly, if , then we can define the scalar multiple in terms of its columns: column of is the scalar multiple of the th column of by . In this way these algebraic notions for matrices are built upon the corresponding notions for vectors.  We include two initial calculations as examples. If and are defined as , then we have .  We finally note that, as with vectors, the sum (and thus the linear combination) of two or more matrices only makes sense if all involved matrices are of the same size.   Before we explore the concept of span, we need to discuss the connection between systems of linear equations and vector equations. We saw a glimpse of this connection in , and we will develop it further here.  Let us consider the following simple linear system: Solving this linear system involves (as always) investigating whether there are values of and which satisfy both of these equations simultaneously. We will now arrive at this same question from a different angle.  Let's consider the following three vectors in : . Since all of these vectors are in , we can ask this question: Can be written as a linear combination of and ? (This question is equivalent to asking if belongs to .) In other words, do there exist scalars and such that ?  The equation in this final question is equivalent to other vector equations: . Because of , this last vector equation is equivalent to the linear system in .    Consider the following vectors in : . Is in ?  We have written this question in terms of a vector equation, but by the previous discussion we should be able to translate this question to a more familiar one about solutions to linear systems and answer the question using .  The question about vectors is the same as asking if this linear system is consistent: . The augmented matrix for this system is , and the RREF of this matrix is . Since there is a pivot in the final column of this matrix, we conclude (by invoking ) that the linear system is inconsistent. This means that the answer to the original question is no, is not in .     illustrates a general workflow for questions like this. There is no need to explicitly write out the intermediate step involving linear systems; instead, we can form a matrix using the given vectors as the appropriate columns, row reduce the matrix, and answer the question.  Combining vectors in is already (or soon will be) fairly natural for readers of this chapter. Under the operations of scalar multiplication and addition, vectors in have some useful properties, which we record in the following fact. We will not spend time with these properties now, but we will look at them intently in . These properties can all be verified using the corresponding properties of addition and multiplication of real numbers. (And the fact that real numbers have these properties is essential !)    For all vectors , , and in , and for all real numbers and , the following properties hold.                              Thinking about linear systems through the lens of vectors also brings some structure to the solutions to consistent linear systems. When a linear system is consistent and the solution is unique, we have recorded this in terms of the variables involved. For example, we recorded the solution to the linear system in as , , and . However, if we think of these variables as forming a vector in , then we can record the solution this way: .  Similarly, when a consistent system does not have a unique solution, we can again use vector notation. (This would replace the parametric description of the solution set we presented in .) In we considered such a linear system. The solution set can now be written this way: . If we label the vectors and as , then all solutions to this system can be written as , where can be any real number. As we learn more about the geometric interpretations of the solutions to linear systems, this phrasing in terms of vectors will be useful.    Vectors and Geometry  Before we leave this chapter, we need to introduce the connection between vectors and geometry. Readers who have taken multivariable calculus are likely aware of some of these concepts. For the sake of simplicity, we will restrict most of our discussion (and all of our illustrations) to in this section.  We will visualize a vector by identifying it with the point in the plane. We will draw an arrow from the origin to to aid this visualization. So, for example, the vectors and would be visualized in the following picture.   Illustration of two vectors in the plane   Drawing of the vectors u and v in the plane     Scalar multiplication of a vector can be seen as stretching or contracting the vector, if the scalar is positive. If the scalar is negative, the vector will be pointing in the opposite direction, then stretched or contracted. Here is an example using the vector previously defined.   Illustration of scalar multiplication   Drawing of the vector v scaled by one, one half, and negative one     Addition of vectors is also easy to visualize. To add two vectors, move the second vector from the origin so that its beginning coincides with the end of the first vector. The vector sum can be represented by the arrow from the origin to the end of this relocated second vector. (The dashed arrow in the following diagram is the relocated vector .)   Illustration of vector addition   Drawing of the sum of vectors u and v     We can put these previous two ideas together to explain the way to visualize linear combinations (and spans). Let's consider the vectors and as previously defined, and we will also define as .  When we ask whether is in , this is the same as asking whether we can form as a linear combination of and . We answer this question by forming a matrix with the appropriate columns and row reducing. We find the matrix , and the RREF of this matrix is . This tells us that  is in the span of and , and that . Here is the picture illustrating this.   Illustration of a linear combination   Drawing of w as a linear combination of u and v     The reader may be able to see that no matter what vector in was chosen in this last instance, that vector would be in . (This means that .) This has everything to do with the relationship between and .  We will discuss this more carefully in , but this brief comment will suffice for now. As long as in , then is a line through the origin. (Remember that the span in this case consists of all multiples of .) Similarly, as long as neither nor is a multiple of the other vector, then is all of  . (If we were talking about vectors in instead of this span would be a plane through the origin.)     Let and be the following vectors: . Calculate each of the following vectors.                     Let , , and be the following vectors: . Is the vector in ? Explain your answer using techniques from this section. (See especially .)      Write a linear system that is equivalent to the following vector equation:     Write a vector equation that is equivalent to the following linear system: .    Let and be the following vectors: . List five vectors in . For each vector, write down the specific linear combination of and used to generate the vector.    Describe all possible ways of writing as a linear combination of , , and .    For each of the following, determine whether is a linear combination of , , and . Explain your answer.    .            Let , , and be the following vectors: . For what value(s) of is in the plane spanned by and ? Explain your answer.    Let , , and be the following vectors: . Under what conditions is in ? This will be an equation (or equations) satisfied by the . Explain your answer.    Writing Exercises   Let and . Show that is in for all and . Explain your answer.    Two vectors and in are called collinear if or for some . Show that the span of any two nonzero vectors in which are not collinear is all of .    Give an example of three vectors , , in such that no two of them are collinear but . Explain why your example works.    State criteria on vectors in such that . Explain your answer.    Prove property 5 from . Note which properties of the real numbers you use in this proof.     "
},
{
  "id": "def-vector",
  "level": "2",
  "url": "sec-vectors.html#def-vector",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  An -dimensional vector over is an ordered list of real numbers. We will adopt the convention that, unless stated otherwise, vectors are column vectors written in this form: , where for all . (Column vectors are therefore matrices with a single column.) The set of all -dimensional vectors over is denoted .   "
},
{
  "id": "note-equal-vect",
  "level": "2",
  "url": "sec-vectors.html#note-equal-vect",
  "type": "Note",
  "number": "1.4.2",
  "title": "",
  "body": " We say that two vectors and in are equal if for each . This means that an equation involving vectors in captures the same information as equations involving real numbers.  "
},
{
  "id": "def-vectors-algebra",
  "level": "2",
  "url": "sec-vectors.html#def-vectors-algebra",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": "  We can combine and modify vectors through addition and a form of multiplication. We will describe the multiplication first.  Let have the form , and let . Then the scalar multiple of by is the vector in obtained by multiplying each entry of by ; that is, . In this context, we will often refer to real numbers as scalars .  If and are vectors in with the form , then the sum of and is the vector in obtained by adding the corresponding entries in and . That is, .   "
},
{
  "id": "note-special-vectors",
  "level": "2",
  "url": "sec-vectors.html#note-special-vectors",
  "type": "Note",
  "number": "1.4.4",
  "title": "",
  "body": " We will use the notation to denote the zero vector that is, the vector in whose entries are all . We will also use the notation to indicate the scalar multiple .  "
},
{
  "id": "ex-vector-sum",
  "level": "2",
  "url": "sec-vectors.html#ex-vector-sum",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Let and let such that . Then we can calculate and using : .   "
},
{
  "id": "def-lin-comb-span",
  "level": "2",
  "url": "sec-vectors.html#def-lin-comb-span",
  "type": "Definition",
  "number": "1.4.6",
  "title": "",
  "body": "  Let be real numbers and let . Then the linear combination of the vectors with weights  is .  The span of the vectors is the set of all possible linear combinations of and is written . In other words, the span is defined to be .   "
},
{
  "id": "subsec-vector-basics-12",
  "level": "2",
  "url": "sec-vectors.html#subsec-vector-basics-12",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  Taking and from , we can calculate the linear combination of these vectors with weights and : .   "
},
{
  "id": "note-intro-matrix-ops",
  "level": "2",
  "url": "sec-vectors.html#note-intro-matrix-ops",
  "type": "Note",
  "number": "1.4.8",
  "title": "",
  "body": " We have defined addition and scalar multiplication for vectors here, but these concepts also make sense for matrices. We will set the stage briefly here for a return in .  If we think of an matrix in terms of its columns, then the columns of are all vectors in . For two matrices and , we define the sum in this way: column of is the sum of the two vectors in which are the th columns of and . Similarly, if , then we can define the scalar multiple in terms of its columns: column of is the scalar multiple of the th column of by . In this way these algebraic notions for matrices are built upon the corresponding notions for vectors.  We include two initial calculations as examples. If and are defined as , then we have .  We finally note that, as with vectors, the sum (and thus the linear combination) of two or more matrices only makes sense if all involved matrices are of the same size.  "
},
{
  "id": "vect-eqn-ex",
  "level": "2",
  "url": "sec-vectors.html#vect-eqn-ex",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  Consider the following vectors in : . Is in ?  We have written this question in terms of a vector equation, but by the previous discussion we should be able to translate this question to a more familiar one about solutions to linear systems and answer the question using .  The question about vectors is the same as asking if this linear system is consistent: . The augmented matrix for this system is , and the RREF of this matrix is . Since there is a pivot in the final column of this matrix, we conclude (by invoking ) that the linear system is inconsistent. This means that the answer to the original question is no, is not in .   "
},
{
  "id": "fact-alg-props-vectors-rn",
  "level": "2",
  "url": "sec-vectors.html#fact-alg-props-vectors-rn",
  "type": "Fact",
  "number": "1.4.10",
  "title": "",
  "body": "  For all vectors , , and in , and for all real numbers and , the following properties hold.                             "
},
{
  "id": "subsec-geometry-vectors-4",
  "level": "2",
  "url": "sec-vectors.html#subsec-geometry-vectors-4",
  "type": "Figure",
  "number": "1.4.11",
  "title": "",
  "body": " Illustration of two vectors in the plane   Drawing of the vectors u and v in the plane    "
},
{
  "id": "subsec-geometry-vectors-6",
  "level": "2",
  "url": "sec-vectors.html#subsec-geometry-vectors-6",
  "type": "Figure",
  "number": "1.4.12",
  "title": "",
  "body": " Illustration of scalar multiplication   Drawing of the vector v scaled by one, one half, and negative one    "
},
{
  "id": "subsec-geometry-vectors-8",
  "level": "2",
  "url": "sec-vectors.html#subsec-geometry-vectors-8",
  "type": "Figure",
  "number": "1.4.13",
  "title": "",
  "body": " Illustration of vector addition   Drawing of the sum of vectors u and v    "
},
{
  "id": "subsec-geometry-vectors-11",
  "level": "2",
  "url": "sec-vectors.html#subsec-geometry-vectors-11",
  "type": "Figure",
  "number": "1.4.14",
  "title": "",
  "body": " Illustration of a linear combination   Drawing of w as a linear combination of u and v    "
},
{
  "id": "sec-vectors-5-1",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-5-1",
  "type": "Reading Question",
  "number": "1.4.3.1",
  "title": "",
  "body": " Let and be the following vectors: . Calculate each of the following vectors.                   "
},
{
  "id": "sec-vectors-5-2",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-5-2",
  "type": "Reading Question",
  "number": "1.4.3.2",
  "title": "",
  "body": " Let , , and be the following vectors: . Is the vector in ? Explain your answer using techniques from this section. (See especially .)  "
},
{
  "id": "sec-vectors-6-1",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-1",
  "type": "Exercise",
  "number": "1.4.4.1",
  "title": "",
  "body": " Write a linear system that is equivalent to the following vector equation:   "
},
{
  "id": "sec-vectors-6-2",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-2",
  "type": "Exercise",
  "number": "1.4.4.2",
  "title": "",
  "body": " Write a vector equation that is equivalent to the following linear system: .  "
},
{
  "id": "sec-vectors-6-3",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-3",
  "type": "Exercise",
  "number": "1.4.4.3",
  "title": "",
  "body": " Let and be the following vectors: . List five vectors in . For each vector, write down the specific linear combination of and used to generate the vector.  "
},
{
  "id": "sec-vectors-6-4",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-4",
  "type": "Exercise",
  "number": "1.4.4.4",
  "title": "",
  "body": " Describe all possible ways of writing as a linear combination of , , and .  "
},
{
  "id": "sec-vectors-6-5",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-5",
  "type": "Exercise",
  "number": "1.4.4.5",
  "title": "",
  "body": " For each of the following, determine whether is a linear combination of , , and . Explain your answer.    .          "
},
{
  "id": "sec-vectors-6-6",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-6",
  "type": "Exercise",
  "number": "1.4.4.6",
  "title": "",
  "body": " Let , , and be the following vectors: . For what value(s) of is in the plane spanned by and ? Explain your answer.  "
},
{
  "id": "sec-vectors-6-7",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-7",
  "type": "Exercise",
  "number": "1.4.4.7",
  "title": "",
  "body": " Let , , and be the following vectors: . Under what conditions is in ? This will be an equation (or equations) satisfied by the . Explain your answer.  "
},
{
  "id": "sec-vectors-6-8-2",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-8-2",
  "type": "Exercise",
  "number": "1.4.4.8",
  "title": "",
  "body": " Let and . Show that is in for all and . Explain your answer.  "
},
{
  "id": "sec-vectors-6-8-3",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-8-3",
  "type": "Exercise",
  "number": "1.4.4.9",
  "title": "",
  "body": " Two vectors and in are called collinear if or for some . Show that the span of any two nonzero vectors in which are not collinear is all of .  "
},
{
  "id": "sec-vectors-6-8-4",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-8-4",
  "type": "Exercise",
  "number": "1.4.4.10",
  "title": "",
  "body": " Give an example of three vectors , , in such that no two of them are collinear but . Explain why your example works.  "
},
{
  "id": "sec-vectors-6-8-5",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-8-5",
  "type": "Exercise",
  "number": "1.4.4.11",
  "title": "",
  "body": " State criteria on vectors in such that . Explain your answer.  "
},
{
  "id": "sec-vectors-6-8-6",
  "level": "2",
  "url": "sec-vectors.html#sec-vectors-6-8-6",
  "type": "Exercise",
  "number": "1.4.4.12",
  "title": "",
  "body": " Prove property 5 from . Note which properties of the real numbers you use in this proof.  "
},
{
  "id": "sec-fields",
  "level": "1",
  "url": "sec-fields.html",
  "type": "Section",
  "number": "2.1",
  "title": "Fields",
  "body": " Fields   In this section we will consider the real numbers and study their most important properties in a general setting. In the process, we will learn how to handle axioms and abstract algebraic concepts.   In , we used the real numbers as the familiar world within which all of our calculations took place. Before we offer any definitions or results in this chapter, we will ponder exactly what properties of the real numbers were essential to these calculations. (The reader is likely so familiar with the real numbers that its important properties have been internalized and are not in the conscious mind. In this section we will make those properties explicit.)  The most basic concept in this book is the linear equation. What properties of the real numbers are used to solve a simple linear equation? In what follows we will solve the equation and draw to the surface some of these important properties: .  No student wants to write out all of these steps, and no instructor wants to grade such a solution! But the point is to notice the properties of the real numbers which are vital to solving an equation like this and which we usually ignore.  In we used the associativity of addition in . That is, we can move the parentheses around in addition and still have an equivalent expression. (The reader should see subtraction as a form of addition.)  In we used the fact that has an additive inverse a number we can add to to get . (The additive inverse of is .)  In we used the fact that is an additive identity in when we add to any real number , we get again.  In we used the associativity of multiplication in . We can move the parentheses around in multiplication just like we can in addition.  In we used the fact that is the multiplicative inverse of in . In other words, we can multiply by to get .  Finally, in we used the fact that is a multiplicative identity in when we multiply any real number by , that real number is unchanged.    By identifying these properties, our goal is to envision other mathematical realms in which solving linear equations would work the same way it does within . Toward this end, we now define an algebraic object called a field which has all of the properties used above (plus a few we haven't yet mentioned).    A field is a set with operations and and distinct elements such that all of the following properties hold.   For all , . (We say that is closed under addition .)    For all , . (We say that is closed under multiplication .)    For all , . (We say that addition in is commutative .)    For all , . (We say that addition in is associative .)    For each , . (We say that is an additive identity in .)    For each , there exists an element , such that . (We say that each has an additive inverse in .)    For each , . (We say that multiplication is commutative in .)    For each , . (We say that multiplication is associative in .)    For each , . (We say that is a multiplicative identity in .)    For each with , there exists an element such that . (We say that every nonzero element in has a multiplicative inverse .)    For each , . (We say that addition and multiplication in satisfy the distributive law .)        A note about axioms  What are presented in are known as the axioms of a field. This may be the reader's first exposure to axioms in mathematics, and this is worthy of a comment or two.  Much of theoretical mathematics is built upon axiomatic reasoning. The thinking goes like this: If we assume a limited number of properties are true, and we assume nothing beyond those properties, what else follows necessarily? So, we can ask what is true of a field, not just what is true of the real numbers. While the real numbers may have specific properties that a general field does not, anything that is true of a general field must be true of the real numbers.   Working through some examples (and non-examples) will help us make sense of this definition.    The set of real numbers is a field. (If the real numbers were not a field, then we wouldn't have done a very good job of abstracting the properties of the real numbers for this definition!)      The complex numbers are defined in this way: , where . Addition and multiplication are defined in this way: . Notice that the addition and multiplication occuring within the parentheses on the right side of these equations are happening within . In this way, showing that some of the field axioms hold for depends on being a field.  The elements and in are , and these elements are not equal. (We recall that part of the definition of a field is that the elements and are distinct.)  With these definitions, one can check that satisfies the properties of a field. We will prove a few of these properties, and we will assign a few of these proofs in the exercises.  The definitions of and in show that is closed under addition and multiplication. (Notably, this relies on being closed under addition and multiplication!) To prove that the addition in is commutative, we consider two complex numbers and . Then . (We note that line used the fact that addition of real numbers is commutative.) This proves that addition in is commutative.  We will also prove that is an additive identity in . If , then . (This uses the fact that is an additive identity.) We note that although the definition of a field requires us to examine addition by  on both sides, since we just proved that addition is commutative, what we have already shown is sufficient.      The set of non-negative real numbers is not a field. (When thinking about a subset of the real numbers, we will assume that the usual addition and multiplication are in view unless otherwise stated.) While this set is closed under addition and multiplication, it does not contain additive inverses for positive real numbers. For example, the number has no additive inverse in this set.      The set of rational numbers  is a field. The rational numbers are defined as the set of all quotients (hence the symbol ) of integers; more formally, . We do not need to show that all of the field axioms hold in order to prove that is a field. Since is a subset of , and since it therefore inherits its operations from , some of the field axioms hold automatically. (These would include the associativity and commutativity of addition. What else holds by inheritance? ) Checking some of these details is left to the exercises.    We refer the reader to for the definitions of and , related notational conventions, and a refresher on modular arithmetic. All of this is necessary for the following example.    When is a prime integer, then is a field.  Working within can be a bit destabilizing at first, as the calculations take some practice. However, this effort pays off because the smallest finite fields offer some of the most tangible sandboxes in which to play. We will be using for small throughout this chapter to develop some interesting examples.  Part of the definition of a field is that one can divide by any nonzero element. But because we work within so often, division within is strange. In , for instance, the multiplicative inverse of is . (Another way to say this is that, within , the element that acts the most like is .)  The field contains only the elements and , and it therefore is a model for anything that is binary . For this reason, working in is often very useful in computer science.    Having defined fields, we now turn to the consequences of this definition. In other words, if a set with two operations meets the definition of a field, what else must also be true? The following theorem presents some basic results that flow from the axioms of a field. Some of these will look familiar because they are true in and that's where most people are comfortable working.    For any field , the following are true.   The additive identity in is unique.    The multiplicative identity in is unique.    Additive inverses in are unique. (This means that for every element , there exists a unique element which is the additive inverse of . The truth of this statement justifies our use of the notation for the additive inverse of an element .)    Multiplicative inverses in are unique. (The truth of this statement justifies our use of the notation for the multiplicative inverse of a nonzero element .)    For every , .    For every nonzero , .    For every , .    For every , .    If and , then either or .       We will prove a few of these and leave the rest as exercises.  To prove ( ) that the additive identity is unique, we must prove that is the only element in which has the properties of an additive identity. We suppose that is such that for every element . Since this must be true for every , it must be true for . The previous equation then becomes . Since is an additive identity, , which combined with the fact that means that . This proves that the additive identity, , is unique.  To prove ( ) that additive inverses are unique, we must prove that for any element , there is a unique element that behaves like an additive inverse of . We let and we suppose that are both additive inverses of . We wish to show that .  Our assumptions mean that . We then use these assumptions, along with some of the properties of fields (the associativity of addition and the properties of the additive identity) in this calculation: . This proves that additive inverses are unique.    We offer one final note on notation. We will often use juxtaposition to denote multiplication within a field. That is, we may write instead of to indicate the product of two elements in a field. We trust the reader will adjust quickly to this seismic shift.    Carry out the following calculations within .              (Complete this calculation in the two different ways present in the distributive law and verify that they are equal.)       What is the additive inverse of in ? What is the multiplicative inverse of in ? Explain your answers.     says that is not a field because 9 is not prime. Identify an element of that does not have a multiplicative inverse and explain why it does not have an inverse.      Carry out the following calculations in . (Remember that your answer for calculations in should be a number between and .)                               We know that since is not a prime, is not a field. In particular, the axiom about multiplicative inverses does not hold. For each nonzero element of , determine whether or not it has a multiplicative inverse. If the element has a multiplicative inverse, state that inverse.     For each nonzero element of , find the multiplicative inverse.     Writing Exercises   Finish . In other words, complete the proof begun in that is a field.    Consider . Which of the field axioms for hold by inheritance and for which of the axioms is there something that needs to be proved? Put each of the field axioms into one of these two categories. For each axiom that doesn't hold merely by inheritance, prove that it holds for .    For a set , define the set of polynomials over in the usual way:    Is a field? Justify your answer.    Is a field? Justify your answer.       In this problem we consider adding an element to . If is defined by is a field? Justify your answer.    In this problem we consider adding an element to .   If is defined by is a field? Justify your answer.    If is defined by is a field? Justify your answer.       Define by Is a field? Justify your answer.    Consider the set with operations defined as follows: . Is with these operations a field? Justify your answer.    Prove of .    Prove of .    Prove of .    Prove of .    Prove of .     "
},
{
  "id": "def-field",
  "level": "2",
  "url": "sec-fields.html#def-field",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A field is a set with operations and and distinct elements such that all of the following properties hold.   For all , . (We say that is closed under addition .)    For all , . (We say that is closed under multiplication .)    For all , . (We say that addition in is commutative .)    For all , . (We say that addition in is associative .)    For each , . (We say that is an additive identity in .)    For each , there exists an element , such that . (We say that each has an additive inverse in .)    For each , . (We say that multiplication is commutative in .)    For each , . (We say that multiplication is associative in .)    For each , . (We say that is a multiplicative identity in .)    For each with , there exists an element such that . (We say that every nonzero element in has a multiplicative inverse .)    For each , . (We say that addition and multiplication in satisfy the distributive law .)      "
},
{
  "id": "pars-axioms-2",
  "level": "2",
  "url": "sec-fields.html#pars-axioms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axioms "
},
{
  "id": "sec-fields-10",
  "level": "2",
  "url": "sec-fields.html#sec-fields-10",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  The set of real numbers is a field. (If the real numbers were not a field, then we wouldn't have done a very good job of abstracting the properties of the real numbers for this definition!)   "
},
{
  "id": "ex-complex-field",
  "level": "2",
  "url": "sec-fields.html#ex-complex-field",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  The complex numbers are defined in this way: , where . Addition and multiplication are defined in this way: . Notice that the addition and multiplication occuring within the parentheses on the right side of these equations are happening within . In this way, showing that some of the field axioms hold for depends on being a field.  The elements and in are , and these elements are not equal. (We recall that part of the definition of a field is that the elements and are distinct.)  With these definitions, one can check that satisfies the properties of a field. We will prove a few of these properties, and we will assign a few of these proofs in the exercises.  The definitions of and in show that is closed under addition and multiplication. (Notably, this relies on being closed under addition and multiplication!) To prove that the addition in is commutative, we consider two complex numbers and . Then . (We note that line used the fact that addition of real numbers is commutative.) This proves that addition in is commutative.  We will also prove that is an additive identity in . If , then . (This uses the fact that is an additive identity.) We note that although the definition of a field requires us to examine addition by  on both sides, since we just proved that addition is commutative, what we have already shown is sufficient.   "
},
{
  "id": "sec-fields-12",
  "level": "2",
  "url": "sec-fields.html#sec-fields-12",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  The set of non-negative real numbers is not a field. (When thinking about a subset of the real numbers, we will assume that the usual addition and multiplication are in view unless otherwise stated.) While this set is closed under addition and multiplication, it does not contain additive inverses for positive real numbers. For example, the number has no additive inverse in this set.   "
},
{
  "id": "ex-rational-field",
  "level": "2",
  "url": "sec-fields.html#ex-rational-field",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  The set of rational numbers  is a field. The rational numbers are defined as the set of all quotients (hence the symbol ) of integers; more formally, . We do not need to show that all of the field axioms hold in order to prove that is a field. Since is a subset of , and since it therefore inherits its operations from , some of the field axioms hold automatically. (These would include the associativity and commutativity of addition. What else holds by inheritance? ) Checking some of these details is left to the exercises.   "
},
{
  "id": "sec-fields-15",
  "level": "2",
  "url": "sec-fields.html#sec-fields-15",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  When is a prime integer, then is a field.  Working within can be a bit destabilizing at first, as the calculations take some practice. However, this effort pays off because the smallest finite fields offer some of the most tangible sandboxes in which to play. We will be using for small throughout this chapter to develop some interesting examples.  Part of the definition of a field is that one can divide by any nonzero element. But because we work within so often, division within is strange. In , for instance, the multiplicative inverse of is . (Another way to say this is that, within , the element that acts the most like is .)  The field contains only the elements and , and it therefore is a model for anything that is binary . For this reason, working in is often very useful in computer science.   "
},
{
  "id": "thm-field-arithmetic",
  "level": "2",
  "url": "sec-fields.html#thm-field-arithmetic",
  "type": "Theorem",
  "number": "2.1.7",
  "title": "",
  "body": "  For any field , the following are true.   The additive identity in is unique.    The multiplicative identity in is unique.    Additive inverses in are unique. (This means that for every element , there exists a unique element which is the additive inverse of . The truth of this statement justifies our use of the notation for the additive inverse of an element .)    Multiplicative inverses in are unique. (The truth of this statement justifies our use of the notation for the multiplicative inverse of a nonzero element .)    For every , .    For every nonzero , .    For every , .    For every , .    If and , then either or .       We will prove a few of these and leave the rest as exercises.  To prove ( ) that the additive identity is unique, we must prove that is the only element in which has the properties of an additive identity. We suppose that is such that for every element . Since this must be true for every , it must be true for . The previous equation then becomes . Since is an additive identity, , which combined with the fact that means that . This proves that the additive identity, , is unique.  To prove ( ) that additive inverses are unique, we must prove that for any element , there is a unique element that behaves like an additive inverse of . We let and we suppose that are both additive inverses of . We wish to show that .  Our assumptions mean that . We then use these assumptions, along with some of the properties of fields (the associativity of addition and the properties of the additive identity) in this calculation: . This proves that additive inverses are unique.   "
},
{
  "id": "sec-fields-19-1",
  "level": "2",
  "url": "sec-fields.html#sec-fields-19-1",
  "type": "Reading Question",
  "number": "2.1.1",
  "title": "",
  "body": " Carry out the following calculations within .              (Complete this calculation in the two different ways present in the distributive law and verify that they are equal.)     "
},
{
  "id": "sec-fields-19-2",
  "level": "2",
  "url": "sec-fields.html#sec-fields-19-2",
  "type": "Reading Question",
  "number": "2.1.2",
  "title": "",
  "body": " What is the additive inverse of in ? What is the multiplicative inverse of in ? Explain your answers.  "
},
{
  "id": "sec-fields-19-3",
  "level": "2",
  "url": "sec-fields.html#sec-fields-19-3",
  "type": "Reading Question",
  "number": "2.1.3",
  "title": "",
  "body": "  says that is not a field because 9 is not prime. Identify an element of that does not have a multiplicative inverse and explain why it does not have an inverse.  "
},
{
  "id": "sec-fields-20-1",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Carry out the following calculations in . (Remember that your answer for calculations in should be a number between and .)                             "
},
{
  "id": "sec-fields-20-2",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " We know that since is not a prime, is not a field. In particular, the axiom about multiplicative inverses does not hold. For each nonzero element of , determine whether or not it has a multiplicative inverse. If the element has a multiplicative inverse, state that inverse.   "
},
{
  "id": "sec-fields-20-3",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " For each nonzero element of , find the multiplicative inverse.   "
},
{
  "id": "sec-fields-20-4-2",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-2",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Finish . In other words, complete the proof begun in that is a field.  "
},
{
  "id": "sec-fields-20-4-3",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-3",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": " Consider . Which of the field axioms for hold by inheritance and for which of the axioms is there something that needs to be proved? Put each of the field axioms into one of these two categories. For each axiom that doesn't hold merely by inheritance, prove that it holds for .  "
},
{
  "id": "sec-fields-20-4-4",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-4",
  "type": "Exercise",
  "number": "2.1.6",
  "title": "",
  "body": " For a set , define the set of polynomials over in the usual way:    Is a field? Justify your answer.    Is a field? Justify your answer.     "
},
{
  "id": "exer-f3-alpha",
  "level": "2",
  "url": "sec-fields.html#exer-f3-alpha",
  "type": "Exercise",
  "number": "2.1.7",
  "title": "",
  "body": " In this problem we consider adding an element to . If is defined by is a field? Justify your answer.  "
},
{
  "id": "sec-fields-20-4-6",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-6",
  "type": "Exercise",
  "number": "2.1.8",
  "title": "",
  "body": " In this problem we consider adding an element to .   If is defined by is a field? Justify your answer.    If is defined by is a field? Justify your answer.     "
},
{
  "id": "exer-q-root-2",
  "level": "2",
  "url": "sec-fields.html#exer-q-root-2",
  "type": "Exercise",
  "number": "2.1.9",
  "title": "",
  "body": " Define by Is a field? Justify your answer.  "
},
{
  "id": "sec-fields-20-4-8",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-8",
  "type": "Exercise",
  "number": "2.1.10",
  "title": "",
  "body": " Consider the set with operations defined as follows: . Is with these operations a field? Justify your answer.  "
},
{
  "id": "sec-fields-20-4-9",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-9",
  "type": "Exercise",
  "number": "2.1.11",
  "title": "",
  "body": " Prove of .  "
},
{
  "id": "sec-fields-20-4-10",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-10",
  "type": "Exercise",
  "number": "2.1.12",
  "title": "",
  "body": " Prove of .  "
},
{
  "id": "sec-fields-20-4-11",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-11",
  "type": "Exercise",
  "number": "2.1.13",
  "title": "",
  "body": " Prove of .  "
},
{
  "id": "sec-fields-20-4-12",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-12",
  "type": "Exercise",
  "number": "2.1.14",
  "title": "",
  "body": " Prove of .  "
},
{
  "id": "sec-fields-20-4-13",
  "level": "2",
  "url": "sec-fields.html#sec-fields-20-4-13",
  "type": "Exercise",
  "number": "2.1.15",
  "title": "",
  "body": " Prove of .  "
},
{
  "id": "sec-linear-systems-fields",
  "level": "1",
  "url": "sec-linear-systems-fields.html",
  "type": "Section",
  "number": "2.2",
  "title": "Solving Linear Systems Over Fields",
  "body": " Solving Linear Systems Over Fields   Having now defined a field, in this section we will show how the problems of chapter 1 can be solved in this general setting. We have laid the groundwork for reproducing the results of the first three sections of for a field instead of the real numbers.   We now return to where we began in : the humble linear equation. If fields are generalizations of the real numbers, and if we can solve linear equations when everything in sight comes from the real numbers, we should be able to solve linear equations when everything in sight comes from a general field.    Consider the following equation where all variable values, constants, and coefficients are drawn from : . Solving this equation in would be easy; let's solve it in .  We first note that the additive inverse of in is , so our first step is to add to both sides of the equation: . We now need the multiplicative inverse of in , which is . We multiply both sides by to get our answer: .  When we check that our solution works (we plug back into the original equation and perform the computations in ), we find that it does: .    The point of this section is that the algorithm for solving linear systems ( ) which worked for also works for a general field . In order to be comfortable with this notion, we need to talk quickly through the development of that algorithm in this general setting.  Because a general field contains both and (or rather, an additive and a multiplicative identity), and because within a field we can perform all of the operations needed to solve linear systems, everything we want to do is legitimate. The definitions of the coefficient and augmented matrices, the elementary row operations, the echelon forms, pivots, and the row reduction algorithm (all found in and ) are the same once we move away from . Similarly, the three important theorems we have encountered so far (which we will reproduce below) all hold over a general field . We will omit the proofs of these theorems because the earlier proofs, when translated from to , are still valid.    Suppose is the augmented matrix of a linear system over a field , and suppose that is in reduced row-echelon form. Then the linear system is consistent if and only if there is no pivot in the final column of .      Suppose that is the augmented matrix corresponding to a consistent linear system over a field , and suppose that is in reduced row-echelon form. Then the system has a unique solution if and only if there is a pivot in each of the first columns of .      Let be an matrix with entries in a field and let be row equivalent to both and . If and are in reduced row-echelon form, then .    The algorithm for solving a linear system, supported by these theorems, remains the same as in . We will finish this section with two examples where we go through this algorithm carefully.    The following is a linear system over : . We will begin to solve this system by forming the augmented matrix: . Since working with fields other than is still new, we will explain all of the steps needed to reduce this matrix to its RREF. We first add the first row to the second row to produce a in the position. (Remember that is the additive inverse of in !) This matrix is the result: .  We now add twice the first row to the third to produce a in the position. Here is that matrix: .  We now notice that the second and third rows are the same. This means the third row will end up being a row of zeros, and we can achieve this by adding twice the second row to the third (in , this is the same as subtracting the second row from the third): .  The final step in reducing this matrix is to take care of the entry which is above the pivot in the position. We add the second row to the first, and this is the matrix which results: .  Our matrix is now in RREF, and from we can conclude that this linear system is consistent. Further, from we can see that there is not a unique solution to this system. We can write the solutions to this system, however: Since has three elements, there are three possible values for , meaning that there are three solutions to this linear system.      The following is a linear system over : . This example may seem a bit intimidating at first, especially for readers who have not dealt much with . But when we follow our step-by-step approach, we should arrive at a solution with minimal problems.  First, we write down the augmented matrix of this system: . To start row reducing this matrix, we need a in the entry. Instead of following rigidly by exchanging rows and then dividing (or multiplying by an inverse), we will skip the first step and handle the rows as they are.  For a nonzero element of , the multiplicative inverse is . This means that the inverse of is . So, in order to get a in the position, we multiply the first row of the matrix by . Here is the result: .  We now work to clear out the other entries in the first column. We add times the first row to the second and we add times the first row to the third. (We are taking care of two steps at once here.) This is the result: . (For readers who are new to , verifying these calculations would be an excellent exercise!)  Since we already have a in the entry, we can use that to produce a zero below it in that column. We add times the second row to the third row, and we get this: .  Even though this matrix is not yet in RREF, we do not need to continue with our algorithm. tells us that the original system is inconsistent because of the pivot in the final column. Therefore, this system has no solution.      Solve the following linear equation over . List the steps you take in solving the equation in terms of the axioms of a field.     The following is a matrix with entries from . Reduce this matrix to REF. (It is not necessary to reduce the matrix to RREF.) Describe each step you take.       Solve the following linear system over : .     Solve the following linear system over : .     Solve the following linear system over : .     The following matrix is defined over : . Put this matrix into RREF.     Solve the following linear system over : .     Solve the following linear system over : .     The following matrix is defined over (see ): . Put this matrix into RREF.    The following matrix is defined over (see ): . Put this matrix into RREF.    Writing Exercises   Suppose that we have a consistent linear system over which has free variables. Exactly how many solutions does this linear system have? Explain your answer.     "
},
{
  "id": "sec-linear-systems-fields-4",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-4",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  Consider the following equation where all variable values, constants, and coefficients are drawn from : . Solving this equation in would be easy; let's solve it in .  We first note that the additive inverse of in is , so our first step is to add to both sides of the equation: . We now need the multiplicative inverse of in , which is . We multiply both sides by to get our answer: .  When we check that our solution works (we plug back into the original equation and perform the computations in ), we find that it does: .   "
},
{
  "id": "thm-consistent-system-f",
  "level": "2",
  "url": "sec-linear-systems-fields.html#thm-consistent-system-f",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "",
  "body": "  Suppose is the augmented matrix of a linear system over a field , and suppose that is in reduced row-echelon form. Then the linear system is consistent if and only if there is no pivot in the final column of .   "
},
{
  "id": "thm-unique-soln-system-f",
  "level": "2",
  "url": "sec-linear-systems-fields.html#thm-unique-soln-system-f",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": "  Suppose that is the augmented matrix corresponding to a consistent linear system over a field , and suppose that is in reduced row-echelon form. Then the system has a unique solution if and only if there is a pivot in each of the first columns of .   "
},
{
  "id": "thm-rref-unique-f",
  "level": "2",
  "url": "sec-linear-systems-fields.html#thm-rref-unique-f",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "  Let be an matrix with entries in a field and let be row equivalent to both and . If and are in reduced row-echelon form, then .   "
},
{
  "id": "sec-linear-systems-fields-11",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-11",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  The following is a linear system over : . We will begin to solve this system by forming the augmented matrix: . Since working with fields other than is still new, we will explain all of the steps needed to reduce this matrix to its RREF. We first add the first row to the second row to produce a in the position. (Remember that is the additive inverse of in !) This matrix is the result: .  We now add twice the first row to the third to produce a in the position. Here is that matrix: .  We now notice that the second and third rows are the same. This means the third row will end up being a row of zeros, and we can achieve this by adding twice the second row to the third (in , this is the same as subtracting the second row from the third): .  The final step in reducing this matrix is to take care of the entry which is above the pivot in the position. We add the second row to the first, and this is the matrix which results: .  Our matrix is now in RREF, and from we can conclude that this linear system is consistent. Further, from we can see that there is not a unique solution to this system. We can write the solutions to this system, however: Since has three elements, there are three possible values for , meaning that there are three solutions to this linear system.   "
},
{
  "id": "sec-linear-systems-fields-12",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-12",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  The following is a linear system over : . This example may seem a bit intimidating at first, especially for readers who have not dealt much with . But when we follow our step-by-step approach, we should arrive at a solution with minimal problems.  First, we write down the augmented matrix of this system: . To start row reducing this matrix, we need a in the entry. Instead of following rigidly by exchanging rows and then dividing (or multiplying by an inverse), we will skip the first step and handle the rows as they are.  For a nonzero element of , the multiplicative inverse is . This means that the inverse of is . So, in order to get a in the position, we multiply the first row of the matrix by . Here is the result: .  We now work to clear out the other entries in the first column. We add times the first row to the second and we add times the first row to the third. (We are taking care of two steps at once here.) This is the result: . (For readers who are new to , verifying these calculations would be an excellent exercise!)  Since we already have a in the entry, we can use that to produce a zero below it in that column. We add times the second row to the third row, and we get this: .  Even though this matrix is not yet in RREF, we do not need to continue with our algorithm. tells us that the original system is inconsistent because of the pivot in the final column. Therefore, this system has no solution.   "
},
{
  "id": "sec-linear-systems-fields-13-1",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-13-1",
  "type": "Reading Question",
  "number": "2.2.1",
  "title": "",
  "body": " Solve the following linear equation over . List the steps you take in solving the equation in terms of the axioms of a field.   "
},
{
  "id": "sec-linear-systems-fields-13-2",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-13-2",
  "type": "Reading Question",
  "number": "2.2.2",
  "title": "",
  "body": " The following is a matrix with entries from . Reduce this matrix to REF. (It is not necessary to reduce the matrix to RREF.) Describe each step you take.   "
},
{
  "id": "sec-linear-systems-fields-14-1",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Solve the following linear system over : .   "
},
{
  "id": "sec-linear-systems-fields-14-2",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-2",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Solve the following linear system over : .   "
},
{
  "id": "sec-linear-systems-fields-14-3",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-3",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Solve the following linear system over : .   "
},
{
  "id": "sec-linear-systems-fields-14-4",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-4",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " The following matrix is defined over : . Put this matrix into RREF.   "
},
{
  "id": "sec-linear-systems-fields-14-5",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-5",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Solve the following linear system over : .   "
},
{
  "id": "sec-linear-systems-fields-14-6",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-6",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " Solve the following linear system over : .   "
},
{
  "id": "sec-linear-systems-fields-14-7",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-7",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": " The following matrix is defined over (see ): . Put this matrix into RREF.  "
},
{
  "id": "sec-linear-systems-fields-14-8",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-8",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": " The following matrix is defined over (see ): . Put this matrix into RREF.  "
},
{
  "id": "sec-linear-systems-fields-14-9-2",
  "level": "2",
  "url": "sec-linear-systems-fields.html#sec-linear-systems-fields-14-9-2",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": " Suppose that we have a consistent linear system over which has free variables. Exactly how many solutions does this linear system have? Explain your answer.  "
},
{
  "id": "sec-vector-spaces",
  "level": "1",
  "url": "sec-vector-spaces.html",
  "type": "Section",
  "number": "2.3",
  "title": "Vector Spaces",
  "body": " Vector Spaces   We now move to our next task of abstraction. We have generalized the real numbers and introduced the idea of a field, and we will now generalize the set and structure of the vectors (see ) to a vector space.     A vector space over a field is a set on which are defined the operations of addition and scalar multiplication such that all of the following properties hold.  For all , . (The sum of two vectors is a vector.)  For all and all , . (The scalar multiple of a vector is a vector.)  For all , . (Vector addition is commutative.)  For all , . (Vector addition is associative.)  There is a vector such that for all . (There is a vector which is the identity for vector addition. We call this the zero vector .)  For each there exists a vector such that . (Each vector has an additive inverse.)  For each , . (Scalar multiplication by is an identity.)  For each and all , . (Scalar multiplication of a vector is associative.)  For all and each , . (Scalar multiplication distributes over the sum of vectors.)  For each and all , . (Scalar multiplication distributes over the sum of field elements.)  The elements of are called vectors and the elements of are called scalars .    The reader will want to note when the multiplication of field elements is in view and when scalar multiplication (of a scalar times a vector) is in view. The context should help, as should our practice of using bold notation for vectors. The product of vectors (in the way that we take the product of field elements) is not a defined construction in a general vector space.  Faced with this rather abstract definition, some examples are in order.    The set , with the operations of scalar multiplication and vector addition defined in , is a vector space over . As with our definition of a field, if is not a vector space then we have carried out the enterprise of abstraction rather poorly. (See where we stated most of the properties of a vector space for , though we did not use that language.)      Let be a field and let be defined in the following way: . The operations of scalar multiplication and vector addition are defined for over in the same way that the operations of scalar multiplication and vector addition are defined for over . Then is a vector space.  This should be relatively easy for the reader to believe, but checking the details could be a helpful exercise in the definitions of both fields and vector spaces.      Let be a subset of the real numbers. Define the set as the set of all functions . Given appropriate operations, this is a vector space.  If and are elements of , then we define the sum as for all . Additionally, if and , then we define scalar multiplication as for all . We will now argue that is a vector space.  Looking back at , the first two axioms hold by the way we defined the operations. Axioms three and four hold because addition in is both commutative and associative. (Since these vectors in are functions which take values in , the properties of are once again crucial.)  The zero vector in is the function , the function which is uniformly zero for each value . This function has the properties of the zero vector mandated by axiom five.  The additive inverse of a function is the function since for all . This shows that axiom six holds.  The rest of the axioms hold because of the definitions of vector addition and scalar multiplication and the properties of the real numbers.    The previous example can be difficult to digest, because we are considering functions to be vectors. It may take some adjustment to think of functions rather than single real numbers (or even ordered lists of real numbers) as the objects of study .    Let denote the set of all real-valued polynomials of degree less than or equal to with real coefficients. (Recall that the degree of a polynomial is the largest exponent of the variable that has a nonzero coefficient.) This means that the polynomial has degree and is an element of for all .  We consider vector addition to be the usual algebraic sum of polynomials and scalar multiplication to be the usual product of a polynomial by a constant. Then is a vector space over .      Consider the set but with non-standard operations. (In this example and the next, we will use horizontal instead of vertical notation for . This is purely for ease of notation in these limited instances.) We define the sum of two vectors and to be , and we define scalar multiplication of a vector by a real number to be . It is a good exercise to grapple with the axioms and determine whether or not with these operations is a vector space.  (We are using the symbols and because these operations we are defining are not familiar ones, and most readers likely have no previous associations with these symbols. For our purposes, these symbols have no overarching meaning; they will be redefined for the purposes of specific examples.)  With some work, the reader will find that this is not a vector space. All we need to do in order to show this is not a vector space is to find one axiom that does not hold. We will show that the fifth axiom (regarding the zero vector) does not hold.  We must be careful here, because the terminology can become confusing. By zero vector we do not always mean in the ordered pair . Depending on the operations that are in view, the zero vector may exist in a form other than . To show this axiom does not hold, we must argue that no element of can have the properties of a zero vector given these operations.  We will argue by contradiction. Suppose there is a vector which has the properties of a zero vector. This means that, for any , we have . We consider the vector . If is the zero vector, then we must have , but the addition on this set means . Since it is impossible to have as the second coordinates are not equal as elements of , we have a contradiction, and therefore there can be no zero vector in with these operations.      We again consider the set . Vector addition will be the usual sum in , but scalar multiplication will be different. For any real number and any , we define by . Once again we pose the question: Is this a vector space?  While it is good practice to check all of the axioms, again we only need to find one axiom which does not hold in order to show this is not a vector space. (If it were a vector space, we would need to prove that all of the axioms hold.) We will show that scalar multiplication by is not an identity (axiom 7).  We will examine the scalar product : . If axiom 7 were to hold, we would have . Since , we have shown that axiom 7 does not hold. Therefore, this is not a vector space.    As evidence of the fact that is the model for our general definition of a vector space, we now repeat the definitions of linear combination and span . These definitions in the general setting will be necessaary for the following section. (See the original definitions in .)    Let be a field and let . Let be a vector space over and let . Then the linear combination of the vectors with weights  is .  The span of the vectors is the set of all possible linear combinations of and is written . In other words, the span is defined to be .    The final result in this section is similar to in which we summarize some of the obvious facts which are true in any vector space. We will prove a few of these facts here and leave some others as exercises.    Let be a vector space over a field . Then all of the following hold.  The zero vector in is unique.  Additive inverses of vectors in are unique.  For every , .  For every , .  For every , .  For every , .  If , , and , then either or .      We will first prove property 2. Suppose that and that both have the properties of being additive inverses of . We will show that .  Since and , we have . Adding to both sides (and using both the associative law and the properties of the zero vector) we have .  We will now show that property 4 holds. Since in , we can use the distributive property (axiom 10 in ) to find the following: . We have , and subtracting from both sides gives us . (The reader should recall that by subtracting we mean adding the additive inverse, which every vector in a vector space possesses.)  To prove property 6, we must show that has the properties of the additive inverse of . (Then, by property 2, we can conclude what we want.) We will use the distributive law (axiom 10 again) as well as the just-proved property 4: .      In this question we will explore . (See . The vector space should be thought of as being the same as except that the entries and the operations are coming from .)   Write down two nonzero elements of and compute their sum.    Write down one nonzero element of and compute the scalar multiple of this vector by the element of .       Write down one element of . (See .)    Consider the vector in . (Again, we are writing the vector horizontally for convenience.) How many elements does contain? Write all of them down.      For each of the following, determine whether the given subset is a real vector space, using the usual operations of vector addition and scalar multiplication in .                     Consider the set with the usual scalar multiplication but with vector addition defined this way: . This is not a vector space over . Determine which of the vector space axioms fail, and give an explanation for each such axiom.    Consider the set with the usual vector addition but with scalar multiplication defined this way: . This is not a vector space over . Determine which of the vector space axioms fail, and give an explanation for each such axiom.    Consider the following subset of : . Prove that , with the usual operations of vector addition and scalar multiplication in , is a vector space over . (Hint: Since is a subset of with the same operations as , some of the axioms may not need to be proved from scratch.)    Consider the following three elements of : . Calculate the linear combination of , , and with weights , , and , respectively.    Consider the following three elements of : . Calculate the linear combination of , , and with weights , , and , respectively.    Consider the vector space .   How many distinct vectors are in ?    If and are the following vectors, , how many distinct vectors are in ?       Consider the vector space of all functions . (This general setting was introduced in .) Let and be the following vectors in : . Is the constant function an element of ? Explain your answer.    Consider the following vectors in : . Is ? Explain your answer.    Consider the following vectors in : . Is ? Explain your answer.    Writing Exercises   Is a vector space over ? (Addition and scalar multiplication should be understood as the obvious operations in .) Explain your answer.    Is a vector space over ? (Addition and scalar multiplication should be understood as the obvious operations in .) Explain your answer.    Prove that is a vector space over . (Addition and scalar multiplication should be understood as the obvious operations in .)    Prove that every vector space over is a vector space over .    Prove in .    Prove in .    Prove in .     "
},
{
  "id": "def-vector-space",
  "level": "2",
  "url": "sec-vector-spaces.html#def-vector-space",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A vector space over a field is a set on which are defined the operations of addition and scalar multiplication such that all of the following properties hold.  For all , . (The sum of two vectors is a vector.)  For all and all , . (The scalar multiple of a vector is a vector.)  For all , . (Vector addition is commutative.)  For all , . (Vector addition is associative.)  There is a vector such that for all . (There is a vector which is the identity for vector addition. We call this the zero vector .)  For each there exists a vector such that . (Each vector has an additive inverse.)  For each , . (Scalar multiplication by is an identity.)  For each and all , . (Scalar multiplication of a vector is associative.)  For all and each , . (Scalar multiplication distributes over the sum of vectors.)  For each and all , . (Scalar multiplication distributes over the sum of field elements.)  The elements of are called vectors and the elements of are called scalars .   "
},
{
  "id": "sec-vector-spaces-4",
  "level": "2",
  "url": "sec-vector-spaces.html#sec-vector-spaces-4",
  "type": "Note",
  "number": "2.3.2",
  "title": "",
  "body": "The reader will want to note when the multiplication of field elements is in view and when scalar multiplication (of a scalar times a vector) is in view. The context should help, as should our practice of using bold notation for vectors. The product of vectors (in the way that we take the product of field elements) is not a defined construction in a general vector space. "
},
{
  "id": "ex-rn",
  "level": "2",
  "url": "sec-vector-spaces.html#ex-rn",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  The set , with the operations of scalar multiplication and vector addition defined in , is a vector space over . As with our definition of a field, if is not a vector space then we have carried out the enterprise of abstraction rather poorly. (See where we stated most of the properties of a vector space for , though we did not use that language.)   "
},
{
  "id": "ex-fn",
  "level": "2",
  "url": "sec-vector-spaces.html#ex-fn",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  Let be a field and let be defined in the following way: . The operations of scalar multiplication and vector addition are defined for over in the same way that the operations of scalar multiplication and vector addition are defined for over . Then is a vector space.  This should be relatively easy for the reader to believe, but checking the details could be a helpful exercise in the definitions of both fields and vector spaces.   "
},
{
  "id": "ex-real-functions",
  "level": "2",
  "url": "sec-vector-spaces.html#ex-real-functions",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Let be a subset of the real numbers. Define the set as the set of all functions . Given appropriate operations, this is a vector space.  If and are elements of , then we define the sum as for all . Additionally, if and , then we define scalar multiplication as for all . We will now argue that is a vector space.  Looking back at , the first two axioms hold by the way we defined the operations. Axioms three and four hold because addition in is both commutative and associative. (Since these vectors in are functions which take values in , the properties of are once again crucial.)  The zero vector in is the function , the function which is uniformly zero for each value . This function has the properties of the zero vector mandated by axiom five.  The additive inverse of a function is the function since for all . This shows that axiom six holds.  The rest of the axioms hold because of the definitions of vector addition and scalar multiplication and the properties of the real numbers.   "
},
{
  "id": "sec-vector-spaces-9",
  "level": "2",
  "url": "sec-vector-spaces.html#sec-vector-spaces-9",
  "type": "Note",
  "number": "2.3.6",
  "title": "",
  "body": "The previous example can be difficult to digest, because we are considering functions to be vectors. It may take some adjustment to think of functions rather than single real numbers (or even ordered lists of real numbers) as the objects of study . "
},
{
  "id": "ex-real-polys",
  "level": "2",
  "url": "sec-vector-spaces.html#ex-real-polys",
  "type": "Example",
  "number": "2.3.7",
  "title": "",
  "body": "  Let denote the set of all real-valued polynomials of degree less than or equal to with real coefficients. (Recall that the degree of a polynomial is the largest exponent of the variable that has a nonzero coefficient.) This means that the polynomial has degree and is an element of for all .  We consider vector addition to be the usual algebraic sum of polynomials and scalar multiplication to be the usual product of a polynomial by a constant. Then is a vector space over .   "
},
{
  "id": "sec-vector-spaces-11",
  "level": "2",
  "url": "sec-vector-spaces.html#sec-vector-spaces-11",
  "type": "Example",
  "number": "2.3.8",
  "title": "",
  "body": "  Consider the set but with non-standard operations. (In this example and the next, we will use horizontal instead of vertical notation for . This is purely for ease of notation in these limited instances.) We define the sum of two vectors and to be , and we define scalar multiplication of a vector by a real number to be . It is a good exercise to grapple with the axioms and determine whether or not with these operations is a vector space.  (We are using the symbols and because these operations we are defining are not familiar ones, and most readers likely have no previous associations with these symbols. For our purposes, these symbols have no overarching meaning; they will be redefined for the purposes of specific examples.)  With some work, the reader will find that this is not a vector space. All we need to do in order to show this is not a vector space is to find one axiom that does not hold. We will show that the fifth axiom (regarding the zero vector) does not hold.  We must be careful here, because the terminology can become confusing. By zero vector we do not always mean in the ordered pair . Depending on the operations that are in view, the zero vector may exist in a form other than . To show this axiom does not hold, we must argue that no element of can have the properties of a zero vector given these operations.  We will argue by contradiction. Suppose there is a vector which has the properties of a zero vector. This means that, for any , we have . We consider the vector . If is the zero vector, then we must have , but the addition on this set means . Since it is impossible to have as the second coordinates are not equal as elements of , we have a contradiction, and therefore there can be no zero vector in with these operations.   "
},
{
  "id": "sec-vector-spaces-12",
  "level": "2",
  "url": "sec-vector-spaces.html#sec-vector-spaces-12",
  "type": "Example",
  "number": "2.3.9",
  "title": "",
  "body": "  We again consider the set . Vector addition will be the usual sum in , but scalar multiplication will be different. For any real number and any , we define by . Once again we pose the question: Is this a vector space?  While it is good practice to check all of the axioms, again we only need to find one axiom which does not hold in order to show this is not a vector space. (If it were a vector space, we would need to prove that all of the axioms hold.) We will show that scalar multiplication by is not an identity (axiom 7).  We will examine the scalar product : . If axiom 7 were to hold, we would have . Since , we have shown that axiom 7 does not hold. Therefore, this is not a vector space.   "
},
{
  "id": "def-lin-comb-span-general",
  "level": "2",
  "url": "sec-vector-spaces.html#def-lin-comb-span-general",
  "type": "Definition",
  "number": "2.3.10",
  "title": "",
  "body": "  Let be a field and let . Let be a vector space over and let . Then the linear combination of the vectors with weights  is .  The span of the vectors is the set of all possible linear combinations of and is written . In other words, the span is defined to be .   "
},
{
  "id": "thm-vspace-arithmetic",
  "level": "2",
  "url": "sec-vector-spaces.html#thm-vspace-arithmetic",
  "type": "Theorem",
  "number": "2.3.11",
  "title": "",
  "body": "  Let be a vector space over a field . Then all of the following hold.  The zero vector in is unique.  Additive inverses of vectors in are unique.  For every , .  For every , .  For every , .  For every , .  If , , and , then either or .      We will first prove property 2. Suppose that and that both have the properties of being additive inverses of . We will show that .  Since and , we have . Adding to both sides (and using both the associative law and the properties of the zero vector) we have .  We will now show that property 4 holds. Since in , we can use the distributive property (axiom 10 in ) to find the following: . We have , and subtracting from both sides gives us . (The reader should recall that by subtracting we mean adding the additive inverse, which every vector in a vector space possesses.)  To prove property 6, we must show that has the properties of the additive inverse of . (Then, by property 2, we can conclude what we want.) We will use the distributive law (axiom 10 again) as well as the just-proved property 4: .   "
},
{
  "id": "sec-vector-spaces-17-1",
  "level": "2",
  "url": "sec-vector-spaces.html#sec-vector-spaces-17-1",
  "type": "Reading Question",
  "number": "2.3.1",
  "title": "",
  "body": " In this question we will explore . (See . The vector space should be thought of as being the same as except that the entries and the operations are coming from .)   Write down two nonzero elements of and compute their sum.    Write down one nonzero element of and compute the scalar multiple of this vector by the element of .     "
},
{
  "id": "sec-vector-spaces-17-2",
  "level": "2",
  "url": "sec-vector-spaces.html#sec-vector-spaces-17-2",
  "type": "Reading Question",
  "number": "2.3.2",
  "title": "",
  "body": " Write down one element of . (See .)  "
},
{
  "id": "sec-vector-spaces-17-3",
  "level": "2",
  "url": "sec-vector-spaces.html#sec-vector-spaces-17-3",
  "type": "Reading Question",
  "number": "2.3.3",
  "title": "",
  "body": " Consider the vector in . (Again, we are writing the vector horizontally for convenience.) How many elements does contain? Write all of them down.  "
},
{
  "id": "exercises-2-3-1",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": " For each of the following, determine whether the given subset is a real vector space, using the usual operations of vector addition and scalar multiplication in .                   "
},
{
  "id": "exercises-2-3-2",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " Consider the set with the usual scalar multiplication but with vector addition defined this way: . This is not a vector space over . Determine which of the vector space axioms fail, and give an explanation for each such axiom.  "
},
{
  "id": "exercises-2-3-3",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": " Consider the set with the usual vector addition but with scalar multiplication defined this way: . This is not a vector space over . Determine which of the vector space axioms fail, and give an explanation for each such axiom.  "
},
{
  "id": "exercises-2-3-4",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": " Consider the following subset of : . Prove that , with the usual operations of vector addition and scalar multiplication in , is a vector space over . (Hint: Since is a subset of with the same operations as , some of the axioms may not need to be proved from scratch.)  "
},
{
  "id": "exercises-2-3-5",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-5",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": " Consider the following three elements of : . Calculate the linear combination of , , and with weights , , and , respectively.  "
},
{
  "id": "exercises-2-3-6",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-6",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": " Consider the following three elements of : . Calculate the linear combination of , , and with weights , , and , respectively.  "
},
{
  "id": "exercises-2-3-7",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-7",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": " Consider the vector space .   How many distinct vectors are in ?    If and are the following vectors, , how many distinct vectors are in ?     "
},
{
  "id": "exercises-2-3-8",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-8",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": " Consider the vector space of all functions . (This general setting was introduced in .) Let and be the following vectors in : . Is the constant function an element of ? Explain your answer.  "
},
{
  "id": "exercises-2-3-9",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-9",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": " Consider the following vectors in : . Is ? Explain your answer.  "
},
{
  "id": "exercises-2-3-10",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-10",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "",
  "body": " Consider the following vectors in : . Is ? Explain your answer.  "
},
{
  "id": "exercises-2-3-11-2",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-11-2",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "",
  "body": " Is a vector space over ? (Addition and scalar multiplication should be understood as the obvious operations in .) Explain your answer.  "
},
{
  "id": "exercises-2-3-11-3",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-11-3",
  "type": "Exercise",
  "number": "2.3.12",
  "title": "",
  "body": " Is a vector space over ? (Addition and scalar multiplication should be understood as the obvious operations in .) Explain your answer.  "
},
{
  "id": "exercises-2-3-11-4",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-11-4",
  "type": "Exercise",
  "number": "2.3.13",
  "title": "",
  "body": " Prove that is a vector space over . (Addition and scalar multiplication should be understood as the obvious operations in .)  "
},
{
  "id": "exercises-2-3-11-5",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-11-5",
  "type": "Exercise",
  "number": "2.3.14",
  "title": "",
  "body": " Prove that every vector space over is a vector space over .  "
},
{
  "id": "exercises-2-3-11-6",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-11-6",
  "type": "Exercise",
  "number": "2.3.15",
  "title": "",
  "body": " Prove in .  "
},
{
  "id": "exercises-2-3-11-7",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-11-7",
  "type": "Exercise",
  "number": "2.3.16",
  "title": "",
  "body": " Prove in .  "
},
{
  "id": "exercises-2-3-11-8",
  "level": "2",
  "url": "sec-vector-spaces.html#exercises-2-3-11-8",
  "type": "Exercise",
  "number": "2.3.17",
  "title": "",
  "body": " Prove in .  "
},
{
  "id": "sec-subspaces",
  "level": "1",
  "url": "sec-subspaces.html",
  "type": "Section",
  "number": "2.4",
  "title": "Subspaces",
  "body": " Subspaces   Whenever we begin to deal with abstraction in mathematics, we also consider the relationship between these abstract concepts. We have already made it clear how the notions of fields and vector spaces are related a vector space requires that we know what a field is! But mathematicians also consider how these abstract objects might fit inside or contain each other.   The most basic example of this is something with which all readers are likely familiar. When we learn about sets , we soon also learn about subsets . For two sets and , we say that is a subset of when all of the elements of are contained in . We denote this by .  A vector space is a set with a lot more structure. So a sub-vector space must be a subset with the properties of a vector space. Here is the formal definition.    Suppose that is a vector space over the field . Then a subset is a subspace of if is also a vector space over with the same operations of vector addition and scalar multiplication that are used for .    To put this less formally: A subspace is a subset which is a vector space over the same field with the operations inherited from the larger space.  Since the operations of a subspace are inherited, we need not check the full list of properties (from ) to prove that a subset is a subspace. In fact, when we consult that definition, we see that axioms 3, 4, and 7 10 will automatically be satisfied these are properties of the operations, not of the set on which the operation is taking place. This leads to the following fact.    Let be a vector space over the field and let be a subset of . Then is a subspace of if the following properties hold.  For all , . (The subset is closed under addition.)  For all and all , . (The subset is closed under scalar multiplication.)  The zero vector of belongs to .  For each there exists a vector such that . (The subset contains all additive inverses.)      From this fact, there appear to be four conditions to check in order to prove that a subset is a subspace. However, we will refer the reader back to . By part 6 of that theorem, we know that if a subset of a vector space is closed under scalar multiplication it must also contain all additive inverses. This means that there are only three conditions to check to prove that a subset is a subspace. We summarize this as a theorem.    Let be a vector space over the field and let be a subset of . Then is a subspace of if the following properties hold.  For all , .  For all and all , .  The zero vector of belongs to .      As always, some examples are in order!    Every vector space has a subspace consisting of a single vector the zero subspace : . In a trivial way, this set meets all of the conditions listed in .      Let be the vector space of all functions as defined in . Let be the subset of all polynomials. (This means we include polynomials of any degree.) Then is a subspace of .  Since the sum of two polynomials is another polynomial and the scalar multiple of a polynomial is a polynomial, the first two conditions in hold. Additionally, the zero function in is the same as the zero polynomial in . This proves that is a subspace of .      The vector space is not a subspace of the vector space . This may seem surprising, as the operations for these spaces are clearly compatible, and we often think of as living inside of .  However, this common way of thinking is wrong because the space is not even a subset of ; thus, it is impossible for to be a subspace of . (The set consists of ordered pairs of real numbers, and consists of ordered triples of real numbers.)  We can make a slight adjustment to match the way that many people think of as living inside of . We define the set in the following way: . Then is what we usually call the -plane in . This subset  is a subspace of .      Here is a collection of examples that generalize . Every line through the origin in is a subspace of , and every line or plane through the origin in is a subspace of . On the other hand, lines in which do not pass through the origin are not subspaces of , and lines and planes which do not pass through the origin in are not subspaces of . The details are left for the exercises.    The notion of the span of a set of vectors gives us another angle through which we can identify subspaces. We begin with a result.    Let be a vector space over a field . If are vectors in , then is a subspace of .    We let . By the definition of the span of a set of vectors, every element of can be written in the following form: , where . We first observe that by taking . Next, if and are elements of , we can write these vectors as , for some scalars and . The sum of these elements is . (We are using some of the properties of a vector space from in order to carry out this algebraic manipulation.) Since for each , this proves that .  Finally, we let and . We want to show that . We can assume that has the form , where . Then we have . (Again, we are using properties of the vector space here.) Since for each , this proves that is closed under scalar multiplication.  Since has all of the properties from , we have shown that is a subspace of .    In the final example of this section, we will use to prove that a set is a subspace by realizing it as the span of a set of vectors.    Consider the following subset of : . This notation means that every given pair of real numbers and specifies an element of . For example, when and , we have .  We will use to prove that is a subspace of . Any element can be written in the following way: . This proves that if , then . We conclude that is a subspace of by .      Let be the vector space with the usual addition and scalar multiplication. Let be the following set: . (We can identify with the first quadrant in .) Determine whether or not is a subspace of . Explain your answer.    Consider the vector space and let be the following set: . Determine whether or not is a subspace of . Explain your answer.    Let be the vector space of all functions . Let and be the following functions: . Let . We know that is a subspace of by . Write down four distinct vectors in .      For each of the following, determine whether or not the subset of is a subspace of . Explain your answers. (We are writing vectors horizontally for convenience.)                          For each of the following, determine whether or not the subset of is a subspace of . Explain your answers.                               Let be the vector space of continuous functions defined , and let be the set of differentiable functions defined .  For each of the following, determine whether or not the subset of is a subspace of . Explain your answers.                               For each of the following, determine whether or not the subset of is a subspace of . Explain your answers. (We are writing vectors horizontally for convenience.)                          Writing Exercises   Let denote the vector space of all functions . (See for the relevant definitions and operations.) Let and be real numbers with , and let denote the set of all continuous functions . Prove that is a subspace of .    Let and be real numbers with . Show that the set of all functions such that is a subspace of . (See for the definition of .)    Prove that a line in is a subspace of if and only if the line passes through the origin. (Note that all lines in can be written in the form .)    Prove that a plane in is a subspace of if and only if the plane passes through the origin. (Note that all planes in can be written in the form .)    Let be a vector space and let and be subspaces of . Must be a subspace of ? Justify your answer.    Let be a vector space and let and be subspaces of . Must be a subspace of ? Justify your answer.    Let be a vector space and let and be subspaces of . Define the sum of and like this: . Must be a subspace of ? Justify your answer.      "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "sec-subspaces.html#def-subspace",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  Suppose that is a vector space over the field . Then a subset is a subspace of if is also a vector space over with the same operations of vector addition and scalar multiplication that are used for .   "
},
{
  "id": "fact-proving-subspace",
  "level": "2",
  "url": "sec-subspaces.html#fact-proving-subspace",
  "type": "Fact",
  "number": "2.4.2",
  "title": "",
  "body": "  Let be a vector space over the field and let be a subset of . Then is a subspace of if the following properties hold.  For all , . (The subset is closed under addition.)  For all and all , . (The subset is closed under scalar multiplication.)  The zero vector of belongs to .  For each there exists a vector such that . (The subset contains all additive inverses.)     "
},
{
  "id": "thm-prove-subspace",
  "level": "2",
  "url": "sec-subspaces.html#thm-prove-subspace",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "",
  "body": "  Let be a vector space over the field and let be a subset of . Then is a subspace of if the following properties hold.  For all , .  For all and all , .  The zero vector of belongs to .     "
},
{
  "id": "sec-subspaces-12",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-12",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "  Every vector space has a subspace consisting of a single vector the zero subspace : . In a trivial way, this set meets all of the conditions listed in .   "
},
{
  "id": "sec-subspaces-13",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-13",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": "  Let be the vector space of all functions as defined in . Let be the subset of all polynomials. (This means we include polynomials of any degree.) Then is a subspace of .  Since the sum of two polynomials is another polynomial and the scalar multiple of a polynomial is a polynomial, the first two conditions in hold. Additionally, the zero function in is the same as the zero polynomial in . This proves that is a subspace of .   "
},
{
  "id": "r2-r3",
  "level": "2",
  "url": "sec-subspaces.html#r2-r3",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  The vector space is not a subspace of the vector space . This may seem surprising, as the operations for these spaces are clearly compatible, and we often think of as living inside of .  However, this common way of thinking is wrong because the space is not even a subset of ; thus, it is impossible for to be a subspace of . (The set consists of ordered pairs of real numbers, and consists of ordered triples of real numbers.)  We can make a slight adjustment to match the way that many people think of as living inside of . We define the set in the following way: . Then is what we usually call the -plane in . This subset  is a subspace of .   "
},
{
  "id": "sec-subspaces-15",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-15",
  "type": "Example",
  "number": "2.4.7",
  "title": "",
  "body": "  Here is a collection of examples that generalize . Every line through the origin in is a subspace of , and every line or plane through the origin in is a subspace of . On the other hand, lines in which do not pass through the origin are not subspaces of , and lines and planes which do not pass through the origin in are not subspaces of . The details are left for the exercises.   "
},
{
  "id": "thm-span-subspace",
  "level": "2",
  "url": "sec-subspaces.html#thm-span-subspace",
  "type": "Theorem",
  "number": "2.4.8",
  "title": "",
  "body": "  Let be a vector space over a field . If are vectors in , then is a subspace of .    We let . By the definition of the span of a set of vectors, every element of can be written in the following form: , where . We first observe that by taking . Next, if and are elements of , we can write these vectors as , for some scalars and . The sum of these elements is . (We are using some of the properties of a vector space from in order to carry out this algebraic manipulation.) Since for each , this proves that .  Finally, we let and . We want to show that . We can assume that has the form , where . Then we have . (Again, we are using properties of the vector space here.) Since for each , this proves that is closed under scalar multiplication.  Since has all of the properties from , we have shown that is a subspace of .   "
},
{
  "id": "sec-subspaces-19",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-19",
  "type": "Example",
  "number": "2.4.9",
  "title": "",
  "body": "  Consider the following subset of : . This notation means that every given pair of real numbers and specifies an element of . For example, when and , we have .  We will use to prove that is a subspace of . Any element can be written in the following way: . This proves that if , then . We conclude that is a subspace of by .   "
},
{
  "id": "sec-subspaces-20-1",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-20-1",
  "type": "Reading Question",
  "number": "2.4.1",
  "title": "",
  "body": " Let be the vector space with the usual addition and scalar multiplication. Let be the following set: . (We can identify with the first quadrant in .) Determine whether or not is a subspace of . Explain your answer.  "
},
{
  "id": "sec-subspaces-20-2",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-20-2",
  "type": "Reading Question",
  "number": "2.4.2",
  "title": "",
  "body": " Consider the vector space and let be the following set: . Determine whether or not is a subspace of . Explain your answer.  "
},
{
  "id": "sec-subspaces-20-3",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-20-3",
  "type": "Reading Question",
  "number": "2.4.3",
  "title": "",
  "body": " Let be the vector space of all functions . Let and be the following functions: . Let . We know that is a subspace of by . Write down four distinct vectors in .  "
},
{
  "id": "sec-subspaces-21-1",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-1",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": " For each of the following, determine whether or not the subset of is a subspace of . Explain your answers. (We are writing vectors horizontally for convenience.)                        "
},
{
  "id": "sec-subspaces-21-2",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-2",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": " For each of the following, determine whether or not the subset of is a subspace of . Explain your answers.                             "
},
{
  "id": "sec-subspaces-21-3",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-3",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": " Let be the vector space of continuous functions defined , and let be the set of differentiable functions defined .  For each of the following, determine whether or not the subset of is a subspace of . Explain your answers.                             "
},
{
  "id": "sec-subspaces-21-4",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-4",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": " For each of the following, determine whether or not the subset of is a subspace of . Explain your answers. (We are writing vectors horizontally for convenience.)                        "
},
{
  "id": "exer-contin-functions",
  "level": "2",
  "url": "sec-subspaces.html#exer-contin-functions",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": " Let denote the vector space of all functions . (See for the relevant definitions and operations.) Let and be real numbers with , and let denote the set of all continuous functions . Prove that is a subspace of .  "
},
{
  "id": "sec-subspaces-21-5-3",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-5-3",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": " Let and be real numbers with . Show that the set of all functions such that is a subspace of . (See for the definition of .)  "
},
{
  "id": "sec-subspaces-21-5-4",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-5-4",
  "type": "Exercise",
  "number": "2.4.7",
  "title": "",
  "body": " Prove that a line in is a subspace of if and only if the line passes through the origin. (Note that all lines in can be written in the form .)  "
},
{
  "id": "sec-subspaces-21-5-5",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-5-5",
  "type": "Exercise",
  "number": "2.4.8",
  "title": "",
  "body": " Prove that a plane in is a subspace of if and only if the plane passes through the origin. (Note that all planes in can be written in the form .)  "
},
{
  "id": "sec-subspaces-21-5-6",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-5-6",
  "type": "Exercise",
  "number": "2.4.9",
  "title": "",
  "body": " Let be a vector space and let and be subspaces of . Must be a subspace of ? Justify your answer.  "
},
{
  "id": "sec-subspaces-21-5-7",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-5-7",
  "type": "Exercise",
  "number": "2.4.10",
  "title": "",
  "body": " Let be a vector space and let and be subspaces of . Must be a subspace of ? Justify your answer.  "
},
{
  "id": "sec-subspaces-21-5-8",
  "level": "2",
  "url": "sec-subspaces.html#sec-subspaces-21-5-8",
  "type": "Exercise",
  "number": "2.4.11",
  "title": "",
  "body": " Let be a vector space and let and be subspaces of . Define the sum of and like this: . Must be a subspace of ? Justify your answer.  "
},
{
  "id": "sec-linear-trans",
  "level": "1",
  "url": "sec-linear-trans.html",
  "type": "Section",
  "number": "3.1",
  "title": "Linear Transformations",
  "body": " Linear Transformations   Speaking broadly, mathematicians are often concerned about (mathematical) objects and the right sort of functions between those objects. The structure of specific objects can be illuminated by a look at the functions to and from those objects. In linear algebra, the objects in view are vector spaces (see ), and the functions between these objects are called linear transformations .    Introduction to Linear Transformations    If and are vector spaces over a field , then a function is called a linear transformation if both of the following properties hold.   For all , we have .    For all and all , we have .   These functions are sometimes referred to as linear maps or linear operators .  If is a linear transformation, then is the domain of and is the codomain of .     Many readers will be more familiar with the idea of the range of a function than the codomain of a function. The range of a linear transformation is the set . In words, the range is the subset of the codomain consisting of the outputs of the function for all elements of the domain. We will often use the term image when discussing the range of a linear transformation.   Linear transformations are the right types of functions to study between vector spaces because they preserve the primary vector space operations. The first property of linear transformations means that such a function respects vector addition, and the second property means that such a function respects scalar multiplication.    We consider the real vector spaces and , along with the function which takes the derivative. That is, for all . So if , then . We note that and .  The fact that our function is a linear transformation between these vector spaces is a consequence of calculus. For all differentiable functions and , and all real numbers , it is true that . (If the reader doubts or has forgotten these facts, the closest textbook on single-variable calculus should be consulted posthaste .)  These calculus facts confirm that and for all and all . This proves that is a linear transformation.      Let be the function which reflects a vector in the Cartesian plane across the -axis. So . Additionally, let be the function which rotates a vector counter-clockwise around the origin by radians. So . Then both and are linear transformations.  We will supply two calculations here to give the sense of these functions. The reader should note that takes the vector in the second quadrant and reflects it across the -axis to the vector in the third quadrant. Also, rotates the vector counter-clockwise around the origin by radians to the vector . (It is fairly obvious that the length of the vectors and are the same. To check the claim about the angles, one would calculate the angles between the positive -axis and both the vectors and . The first angle is roughly radians and the second is , giving a difference of radians, or roughly .)  We first check the additivity condition. Let . Then we have . From the distributive property of the real numbers (in the second coordinate of these calculations), we can see that the additive property holds for . (The calculation for is similar.)  We now check the scalar multiplication property. (Again, the calculations for and are similar, so we will only show one of them.) Let and let . Then we have . Note that we used the commutativity of multiplication in in this calculation.  These brief calculations show that both and are linear transformations.      Linear Transformations and Matrices  While linear algebra is not only about matrices, matrices are valuable tools and provide a rich source of examples in this subject. In fact, matrices are so central to the notion of linear transformations that we will devote this subsection to their discussion.    Let be a field and let be an matrix with entries from . (We will refer to this in what follows as a matrix over . ) Then multiplication by is a linear transformation from to . (We will denote the function which is multiplication by by .)  To justify this claim we must first explain what we mean by multiplication by . We will let and denote entry in by . We will further denote the entries of by . Then the matrix-vector product  is defined to be the following vector in : . One way to state this is that entry in is the sum of the entry-wise product of row in with . Since is an element of , the domain and codomain of are correct.  What we have defined is the product of a matrix and a vector. However, an alternate description of this product will be more useful in proving that is a linear transformation.  If the columns of are thought of as vectors , then the product is also . In words, is a linear combination of the columns of with weights coming from the entries of . (We have reserved proving the equivalence of these two formulations to .)  With this equivalent definition, proving that is a linear transformation is a snap. Let and be vectors in and let . We will further denote the entries of and by . Then we have the following: . These two expressions are equal due to the fact that is a vector space.  We have one final calculation to prove that is a linear transformation. Let be a vector in and let be in . Then we have Once again, thsse expressions are equal because is a vector space.  These calculations prove that is a linear transformation.     To summarize, when is a field, multiplication by an matrix is a linear transformation .   General matrices are rectangular, not necessarily square. When a matrix is square, however, we have additional properties to discuss.    Let be an matrix. (So is square .) We say that is a diagonal matrix if for all such that . If is diagonal and for all , then is called an identity matrix .     We often use the notation to refer to the columns of the identity matrix. In other words, is the vector with a in entry and zeros elsewhere.     Properties of Linear Transformations  Recall that while linear transformations must have special properties, they are first of all functions . And, as functions, properties like injectivity and surjectivity can apply to linear transformations.    Let be a linear transformation between vector spaces. We say that is injective if implies for all . Injective linear transformations are also referred to as one-to-one since no two distinct elements of the domain may correspond to the same element of the range.  A linear transformation is called surjective if for every there exists a vector such that . For surjective functions, the image\/range is the same as the codomain. (The range is a subset of the codomain for every function, but these sets are equal if and only if the function is surjective.) Sometimes surjective functions are referred to as onto functions.  If a linear transformation is both injective and surjective, we say that it is bijective .      Let's reconsider the linear transformation which appeared in . We observe that is surjective but not injective.  The transformation is surjective because we know about the antiderivative. Let have the form . This is a generic element of , so we only need to supply an element such that , and this will prove that is surjective. Consider the element defined as . It is but the work of a Calculus I student to verify that , thus showing that is surjective. (We note that we could have chosen to have any constant term at all; we used the constant term of .)  Finally, we will show that is not injective by looking at an example of two elements of which have the same image under in . Let and . Then we see that even though , we have , and this proves that is not injective.    We will define one more property of linear transformations here that will resurface in .    Let be a linear transformation between vector spaces. The identity transformation on is the linear transformation which is for each . (If the vector space we have in mind is clear, we will drop the subscript and use the notation .)  We say that the linear transformation is invertible if there exists a linear transformation such that .      The Matrix-Vector Form of a Linear System  Having defined the product of a matrix and a vector in , we can reformulate one of the foundational (and introductory) matters of this book. We will now put the notion of a linear system in particular, the solutions to linear systems in a different context.  Let's consider the following system of linear equations over a field , as we saw in : . If we let be the matrix , be the vector of variables , and be the vector of constants , then this linear system can be written efficiently as .  With this reformulation, the questions of the existence and uniqueness of solutions to a system of equations (see the end of ) can now be stated in the language of the injectivity and surjectivity of linear transformations.    Consider the linear transformation which is multiplication by this matrix: . We will show that is neither injective nor surjective.  Let and be the following vectors in : . By forming and row-reducing the augmented matrices and , we can determine how many solutions there are to the equations and , respectively. Here are the calculations: , .  From , since there is a pivot in the final column of the RREF of , we see that is not in the image of . This means that the matrix equation has no solution, so is not surjective; equivalently, the linear system which corresponds to the augmented matrix is inconsistent.  From , we see that is in the image of . Since there is no pivot in the final column of the RREF of , and since there is a free variable in that same RREF, this means that the matrix equation has multiple solutions, so is not injective. Specifically, if , then we have both and . (The vector results from setting the free variable equal to , and we obtain by setting the free variable equal to .) Finally, we note that the linear system which corresponds to the augmented matrix is consistent with many solutions that is, a solution is not unique.       For each of the following, determine the number of rows and columns that a matrix would have if multiplication by that matrix is a linear transformation with the given domain and codomain.   domain: , codomain:      domain: , codomain:         Let , , , and be defined as follows: . Define a linear transformation to be multiplication by .   Find .     Find an in such that .     Is there more than one whose image under is ? How do you know?     Determine whether or not is in the range of .           Consider the function defined by . (So, for example, .) Is a linear transformation? Justify your answer.    Consider the function defined by . Is a linear transformation? Justify your answer.    Consider the function defined by . Is a linear transformation? Justify your answer.    Let be the function defined by . Is a linear transformation? Justify your answer.    Let be the function defined by . Is a linear transformation? Justify your answer.    Consider the following matrix over : . For each of the following vectors , calculate the matrix-vector product .                     Consider the following matrix over : .   If is the linear transformation which is multiplication by , what are the domain and codomain of ?    Calculate the image of the vector under the linear transformation .    Is the vector in the image of ? Explain your answer.       Let be the following matrix over : . Let be the linear transformation which is multiplication by .   Is the vector in the image of ? Explain your answer.    Is surjective? Explain your answer.       Let be the following matrix over : . Let be the linear transformation which is multiplication by .   Is the vector in the image of ? Explain your answer.    The vector is in the image of . Find one such that .    Is there more than one such that ? How do you know?    Is injective? Is surjective? Explain your answers.       Let be the linear transformation which is multiplication by the following matrix: . Give a description of all vectors such that .    Writing Exercises   Define the function to be the following: . Prove that is a linear transformation.    Let and be linear transformations between vector spaces over a field . Prove that is also a linear transformation.    Let and be linear transformations between vector spaces over a field .   Prove that if is injective, then must be injective.    Prove that if is surjective, then must be surjective.       Let be a function between vector spaces over .   If is a linear transformation, must it be true that ? Either prove this is true or produce a counterexample.    If , must be a linear transformation? Either prove this is true or produce a counterexample.       Let be vectors which span a vector space . If is a linear transformation for which for all , prove that is the zero transformation. (In other words, prove that for all .)    Let be an matrix over a field , and let be a vector in . Prove that the formulations of the matrix-vector product given in and are equivalent.     "
},
{
  "id": "def-lin-trans",
  "level": "2",
  "url": "sec-linear-trans.html#def-lin-trans",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  If and are vector spaces over a field , then a function is called a linear transformation if both of the following properties hold.   For all , we have .    For all and all , we have .   These functions are sometimes referred to as linear maps or linear operators .  If is a linear transformation, then is the domain of and is the codomain of .   "
},
{
  "id": "subsec-lin-trans-3",
  "level": "2",
  "url": "sec-linear-trans.html#subsec-lin-trans-3",
  "type": "Note",
  "number": "3.1.2",
  "title": "",
  "body": " Many readers will be more familiar with the idea of the range of a function than the codomain of a function. The range of a linear transformation is the set . In words, the range is the subset of the codomain consisting of the outputs of the function for all elements of the domain. We will often use the term image when discussing the range of a linear transformation.  "
},
{
  "id": "examp-deriv-lin-trans",
  "level": "2",
  "url": "sec-linear-trans.html#examp-deriv-lin-trans",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  We consider the real vector spaces and , along with the function which takes the derivative. That is, for all . So if , then . We note that and .  The fact that our function is a linear transformation between these vector spaces is a consequence of calculus. For all differentiable functions and , and all real numbers , it is true that . (If the reader doubts or has forgotten these facts, the closest textbook on single-variable calculus should be consulted posthaste .)  These calculus facts confirm that and for all and all . This proves that is a linear transformation.   "
},
{
  "id": "examp-rotate-reflect",
  "level": "2",
  "url": "sec-linear-trans.html#examp-rotate-reflect",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  Let be the function which reflects a vector in the Cartesian plane across the -axis. So . Additionally, let be the function which rotates a vector counter-clockwise around the origin by radians. So . Then both and are linear transformations.  We will supply two calculations here to give the sense of these functions. The reader should note that takes the vector in the second quadrant and reflects it across the -axis to the vector in the third quadrant. Also, rotates the vector counter-clockwise around the origin by radians to the vector . (It is fairly obvious that the length of the vectors and are the same. To check the claim about the angles, one would calculate the angles between the positive -axis and both the vectors and . The first angle is roughly radians and the second is , giving a difference of radians, or roughly .)  We first check the additivity condition. Let . Then we have . From the distributive property of the real numbers (in the second coordinate of these calculations), we can see that the additive property holds for . (The calculation for is similar.)  We now check the scalar multiplication property. (Again, the calculations for and are similar, so we will only show one of them.) Let and let . Then we have . Note that we used the commutativity of multiplication in in this calculation.  These brief calculations show that both and are linear transformations.   "
},
{
  "id": "examp-matrix-vector-prod",
  "level": "2",
  "url": "sec-linear-trans.html#examp-matrix-vector-prod",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Let be a field and let be an matrix with entries from . (We will refer to this in what follows as a matrix over . ) Then multiplication by is a linear transformation from to . (We will denote the function which is multiplication by by .)  To justify this claim we must first explain what we mean by multiplication by . We will let and denote entry in by . We will further denote the entries of by . Then the matrix-vector product  is defined to be the following vector in : . One way to state this is that entry in is the sum of the entry-wise product of row in with . Since is an element of , the domain and codomain of are correct.  What we have defined is the product of a matrix and a vector. However, an alternate description of this product will be more useful in proving that is a linear transformation.  If the columns of are thought of as vectors , then the product is also . In words, is a linear combination of the columns of with weights coming from the entries of . (We have reserved proving the equivalence of these two formulations to .)  With this equivalent definition, proving that is a linear transformation is a snap. Let and be vectors in and let . We will further denote the entries of and by . Then we have the following: . These two expressions are equal due to the fact that is a vector space.  We have one final calculation to prove that is a linear transformation. Let be a vector in and let be in . Then we have Once again, thsse expressions are equal because is a vector space.  These calculations prove that is a linear transformation.   "
},
{
  "id": "subsec-lin-trans-matrices-4",
  "level": "2",
  "url": "sec-linear-trans.html#subsec-lin-trans-matrices-4",
  "type": "Note",
  "number": "3.1.6",
  "title": "",
  "body": " To summarize, when is a field, multiplication by an matrix is a linear transformation .  "
},
{
  "id": "def-diag-identity-matrices",
  "level": "2",
  "url": "sec-linear-trans.html#def-diag-identity-matrices",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": "  Let be an matrix. (So is square .) We say that is a diagonal matrix if for all such that . If is diagonal and for all , then is called an identity matrix .   "
},
{
  "id": "note-define-ej",
  "level": "2",
  "url": "sec-linear-trans.html#note-define-ej",
  "type": "Note",
  "number": "3.1.8",
  "title": "",
  "body": " We often use the notation to refer to the columns of the identity matrix. In other words, is the vector with a in entry and zeros elsewhere.  "
},
{
  "id": "def-injective-surjective-bijective",
  "level": "2",
  "url": "sec-linear-trans.html#def-injective-surjective-bijective",
  "type": "Definition",
  "number": "3.1.9",
  "title": "",
  "body": "  Let be a linear transformation between vector spaces. We say that is injective if implies for all . Injective linear transformations are also referred to as one-to-one since no two distinct elements of the domain may correspond to the same element of the range.  A linear transformation is called surjective if for every there exists a vector such that . For surjective functions, the image\/range is the same as the codomain. (The range is a subset of the codomain for every function, but these sets are equal if and only if the function is surjective.) Sometimes surjective functions are referred to as onto functions.  If a linear transformation is both injective and surjective, we say that it is bijective .   "
},
{
  "id": "subsec-props-linear-trans-4",
  "level": "2",
  "url": "sec-linear-trans.html#subsec-props-linear-trans-4",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": "  Let's reconsider the linear transformation which appeared in . We observe that is surjective but not injective.  The transformation is surjective because we know about the antiderivative. Let have the form . This is a generic element of , so we only need to supply an element such that , and this will prove that is surjective. Consider the element defined as . It is but the work of a Calculus I student to verify that , thus showing that is surjective. (We note that we could have chosen to have any constant term at all; we used the constant term of .)  Finally, we will show that is not injective by looking at an example of two elements of which have the same image under in . Let and . Then we see that even though , we have , and this proves that is not injective.   "
},
{
  "id": "def-lin-trans-invertible",
  "level": "2",
  "url": "sec-linear-trans.html#def-lin-trans-invertible",
  "type": "Definition",
  "number": "3.1.11",
  "title": "",
  "body": "  Let be a linear transformation between vector spaces. The identity transformation on is the linear transformation which is for each . (If the vector space we have in mind is clear, we will drop the subscript and use the notation .)  We say that the linear transformation is invertible if there exists a linear transformation such that .   "
},
{
  "id": "subsec-matrix-vector-form-lin-system-5",
  "level": "2",
  "url": "sec-linear-trans.html#subsec-matrix-vector-form-lin-system-5",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": "  Consider the linear transformation which is multiplication by this matrix: . We will show that is neither injective nor surjective.  Let and be the following vectors in : . By forming and row-reducing the augmented matrices and , we can determine how many solutions there are to the equations and , respectively. Here are the calculations: , .  From , since there is a pivot in the final column of the RREF of , we see that is not in the image of . This means that the matrix equation has no solution, so is not surjective; equivalently, the linear system which corresponds to the augmented matrix is inconsistent.  From , we see that is in the image of . Since there is no pivot in the final column of the RREF of , and since there is a free variable in that same RREF, this means that the matrix equation has multiple solutions, so is not injective. Specifically, if , then we have both and . (The vector results from setting the free variable equal to , and we obtain by setting the free variable equal to .) Finally, we note that the linear system which corresponds to the augmented matrix is consistent with many solutions that is, a solution is not unique.   "
},
{
  "id": "sec-linear-trans-7-1",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-7-1",
  "type": "Reading Question",
  "number": "3.1.5.1",
  "title": "",
  "body": " For each of the following, determine the number of rows and columns that a matrix would have if multiplication by that matrix is a linear transformation with the given domain and codomain.   domain: , codomain:      domain: , codomain:       "
},
{
  "id": "sec-linear-trans-7-2",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-7-2",
  "type": "Reading Question",
  "number": "3.1.5.2",
  "title": "",
  "body": " Let , , , and be defined as follows: . Define a linear transformation to be multiplication by .   Find .     Find an in such that .     Is there more than one whose image under is ? How do you know?     Determine whether or not is in the range of .      "
},
{
  "id": "sec-linear-trans-8-1",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-1",
  "type": "Exercise",
  "number": "3.1.6.1",
  "title": "",
  "body": " Consider the function defined by . (So, for example, .) Is a linear transformation? Justify your answer.  "
},
{
  "id": "sec-linear-trans-8-2",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-2",
  "type": "Exercise",
  "number": "3.1.6.2",
  "title": "",
  "body": " Consider the function defined by . Is a linear transformation? Justify your answer.  "
},
{
  "id": "sec-linear-trans-8-3",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-3",
  "type": "Exercise",
  "number": "3.1.6.3",
  "title": "",
  "body": " Consider the function defined by . Is a linear transformation? Justify your answer.  "
},
{
  "id": "sec-linear-trans-8-4",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-4",
  "type": "Exercise",
  "number": "3.1.6.4",
  "title": "",
  "body": " Let be the function defined by . Is a linear transformation? Justify your answer.  "
},
{
  "id": "sec-linear-trans-8-5",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-5",
  "type": "Exercise",
  "number": "3.1.6.5",
  "title": "",
  "body": " Let be the function defined by . Is a linear transformation? Justify your answer.  "
},
{
  "id": "sec-linear-trans-8-6",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-6",
  "type": "Exercise",
  "number": "3.1.6.6",
  "title": "",
  "body": " Consider the following matrix over : . For each of the following vectors , calculate the matrix-vector product .                   "
},
{
  "id": "sec-linear-trans-8-7",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-7",
  "type": "Exercise",
  "number": "3.1.6.7",
  "title": "",
  "body": " Consider the following matrix over : .   If is the linear transformation which is multiplication by , what are the domain and codomain of ?    Calculate the image of the vector under the linear transformation .    Is the vector in the image of ? Explain your answer.     "
},
{
  "id": "sec-linear-trans-8-8",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-8",
  "type": "Exercise",
  "number": "3.1.6.8",
  "title": "",
  "body": " Let be the following matrix over : . Let be the linear transformation which is multiplication by .   Is the vector in the image of ? Explain your answer.    Is surjective? Explain your answer.     "
},
{
  "id": "sec-linear-trans-8-9",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-9",
  "type": "Exercise",
  "number": "3.1.6.9",
  "title": "",
  "body": " Let be the following matrix over : . Let be the linear transformation which is multiplication by .   Is the vector in the image of ? Explain your answer.    The vector is in the image of . Find one such that .    Is there more than one such that ? How do you know?    Is injective? Is surjective? Explain your answers.     "
},
{
  "id": "sec-linear-trans-8-10",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-10",
  "type": "Exercise",
  "number": "3.1.6.10",
  "title": "",
  "body": " Let be the linear transformation which is multiplication by the following matrix: . Give a description of all vectors such that .  "
},
{
  "id": "sec-linear-trans-8-11-2",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-11-2",
  "type": "Exercise",
  "number": "3.1.6.11",
  "title": "",
  "body": " Define the function to be the following: . Prove that is a linear transformation.  "
},
{
  "id": "exer-lin-trans-comp",
  "level": "2",
  "url": "sec-linear-trans.html#exer-lin-trans-comp",
  "type": "Exercise",
  "number": "3.1.6.12",
  "title": "",
  "body": " Let and be linear transformations between vector spaces over a field . Prove that is also a linear transformation.  "
},
{
  "id": "sec-linear-trans-8-11-4",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-11-4",
  "type": "Exercise",
  "number": "3.1.6.13",
  "title": "",
  "body": " Let and be linear transformations between vector spaces over a field .   Prove that if is injective, then must be injective.    Prove that if is surjective, then must be surjective.     "
},
{
  "id": "lin-trans-zero",
  "level": "2",
  "url": "sec-linear-trans.html#lin-trans-zero",
  "type": "Exercise",
  "number": "3.1.6.14",
  "title": "",
  "body": " Let be a function between vector spaces over .   If is a linear transformation, must it be true that ? Either prove this is true or produce a counterexample.    If , must be a linear transformation? Either prove this is true or produce a counterexample.     "
},
{
  "id": "sec-linear-trans-8-11-6",
  "level": "2",
  "url": "sec-linear-trans.html#sec-linear-trans-8-11-6",
  "type": "Exercise",
  "number": "3.1.6.15",
  "title": "",
  "body": " Let be vectors which span a vector space . If is a linear transformation for which for all , prove that is the zero transformation. (In other words, prove that for all .)  "
},
{
  "id": "exer-matrix-vector-mult",
  "level": "2",
  "url": "sec-linear-trans.html#exer-matrix-vector-mult",
  "type": "Exercise",
  "number": "3.1.6.16",
  "title": "",
  "body": " Let be an matrix over a field , and let be a vector in . Prove that the formulations of the matrix-vector product given in and are equivalent.  "
},
{
  "id": "sec-matrix-linear-trans",
  "level": "1",
  "url": "sec-matrix-linear-trans.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Matrix of a Linear Transformation",
  "body": " The Matrix of a Linear Transformation   As we saw in the previous section, linear transformations can be defined using matrices and they can also be defined with no matrices in sight. In this section we will see that, for a certain class of linear transformations, there is always a matrix in sight .    Constructing the Matrix  Our claim might seem fanciful at first. Can every linear transformation be realized using a matrix? The surprising answer is yes , for a specific kind of linear transformation.  We first make an observation related to the definition of the matrix-vector product in .   If is an matrix with columns , and if we recall the definition of from , then . The truth of this equality comes by thinking of in the way expressed in , as a linear combination of the columns of with weights from the entries in .   We now suppose that is a field and that is a linear transformation. We claim that there is a unique matrix such that for every , . In other words, we claim that the work of the linear transformation can be carried out through multiplication by .  We will define the matrix which does the job. For each , define the vector by . We then define as the matrix with columns .  Since any vector , written as , has the property that , we can verify that the action of is the same as the action of multiplication by : . Note that we used the fact that is a linear transformation in this last string of equalities.  We have just proved the following theorem.    If is a linear transformation, then there exists a unique matrix over such that for all .    A scrupulous reader may protest our use of the word unique in the statement of this theorem. Here is the argument concerning uniqueness. If the theorem is true, then (for this theorem) there is only one way it could possibly work. If a matrix exists, it must have the property that for all . Since we have shown that such a construction does work, the matrix we obtain must be unique.  This theorem is quite powerful. We will demonstrate that power through two examples that find their origin in .    We take our notation from . Let be the linear transformation which reflects a vector in the Cartesian plane across the -axis, and let be the linear transformation which rotates a vector counter-clockwise around the origin by radians. In this example we will find the matrices and such that and for all .  In the proof of , we saw that the way to form the matrix of a linear transformation is to calculate the image of the vectors . In this context, we need to calculate the image of and under and .  The calculations we seek are below: . This tells us that the matrices and are as follows: . Any curious reader can check that these matrices are correct by choosing a vector in and multiplying by and by separately. The results should align with the actions of and , respectively.      Composition and Matrix Multiplication  Since linear transformations are functions, we can compose them with other linear transformations. In order for this to make sense, we need to have the codomains and domains match up correctly.  If and are linear transformations between vector spaces, then we can define the function by for each . Note that such a definition is only possible when the codomain of is the same as the domain of . It is not difficult to show that is a linear transformation. (See .)  If , , and , then the linear transformation is defined , and says that there is a unique matrix over which carries out this linear transformation. What is that matrix?   tells us that there are matrices and such that the transformations and are multiplication by and , respectively. The matrix is and is . We will define the product of and so that the matrix of is the matrix product .    Let be a matrix over a field and let be an matrix over . Then the matrix product  is the unique matrix over such that for all , .     When we take the matrix product , the number of columns of must match the number of rows of . The matrix product makes no sense (and cannot be computed) otherwise. The matrix then has the same number of rows as and the same number of columns as .   Though we have defined matrix multiplication in terms of the composition of linear transformations, we can multiply matrices of the correct dimensions even when we have no specific linear transformations in mind. This is similar to our understanding of row-reducing a matrix this arose in the context of solving linear systems, but the process can be carried out on any matrix.  We have defined matrix multiplication, but we have not specified how the entries in the matrix product are calculated. Fear not; the wait is over.  We will use the definition of matrix multiplication and the formula we have for the product of a matrix and a vector (see ). Since is a vector, we will record a formula for entry in this vector. In what follows, we assume and the entries of ; we also assume : .  When we look again at the formula in for the product of a matrix and a vector, we see that for all and all . In words, this means that the -entry of is the entry-wise product of row in with column in . (Later we will acknowledge this as the dot product of two vectors in .)  We will try to make this concrete with some examples.    Let and be the following matrices over : . Note that the product makes sense since the number of columns of is the same as the number of rows of . Here is the matrix product: . Since the sizes of and allow it, we can also calculate in this example: . Finally, we observe that .      Let and be the following matrices over : . Since is and is , we can calculate , which will be . (In this example we cannot calculate .) Here is the matrix product: . To obtain the last equality, we remember that we are working in .    Since we defined matrix multiplication in the context of the composition of linear transformations, our next example picks up on this theme.    We return to and consider the linear transformations , where reflects a vector in the Cartesian plane across the -axis and rotates a vector counter-clockwise around the origin by radians. In the previous example, we calculated the matrices and for and , respectively. What is the matrix for ?  We have defined matrix multiplication to answer exactly this question. We only need to multiply the matrices in the proper order. The matrix for is . A related question in this context is whether or not linear transformations commute . In other words, is ? For this example, answering that question boils down to comparing the matrix product with the product which we have just calculated: . From this we can see that and are two distinct linear transformations.    As we start to deal more regularly with matrices in the context of linear transformations, we need to introduce some notation.   For a field , the notation denotes the set of all matrices over . When , we will use the notation instead of .   The next theorem records some facts about matrix multiplication which will be useful later in the text. We will walk the reader through the proof of this theorem in the exercises at the end of this section.    Let , , and . Then    ,     , and     .       This theorem says that, if all of the matrix products make sense, matrix multiplication is associative and obeys both of the distributive laws.  There is one other useful way to think about matrix multiplication in terms of the columns of the matrix.    Let , , and let the columns of be . Then the columns of are .    By our definition of the matrix product, for each we have . The observation in means that , so we have . Since is the th column of , this proves the proposition.    From the understanding we developed in , this proposition means that every column of the matrix product is a linear combination of the columns of , when the product is defined.    Invertible Matrices  With matrix multiplication defined in terms of the composition of linear transformations, we turn to a specific composition in this subsection. Specifically, we will think about matrices for linear transformations and when is the identity transformation.  In , we called such linear transformations invertible . When such a linear transformation can be accomplished by matrix multiplication, we will refer to the connected matrix using this same term.    Let . The matrix is an inverse matrix for if .  If a matrix has an inverse, we say that is invertible or non-singular . If is a matrix for which no inverse matrix exists, we say that is singular or not invertible.    It may strike the reader as strange that only square matrices have a chance at being invertible we have only defined invertibility for square matrices. There is a good reason for this, which we will explore in the exercises.  If we know an inverse of a matrix , then we can solve matrix-vector equations with ease: .  The next three propositions present some properties of matrix inverses.    If a matrix has an inverse, that inverse is unique.    Let and suppose that both are inverses for . Then we have .    This proposition allows us to refer to the inverse of a matrix and to use the notation for that matrix.    Suppose that are both invertible. Then is invertible as well and .    If and are both invertible, then both and exist. Since matrix multiplication is associative, the following calculations show that the matrix satisfies the properties of the inverse of , thereby making invertible: .    This final proposition states what may seem like an obvious fact, but which should still be justified. That justification is left to the exercises.    Let be invertible. Then is also invertible and .    While we are not yet ready to calculate the inverse of a matrix (stay tuned!), we can provide examples of invertible matrices and their inverses.    Consider the following matrix : . We can verify that is by computing the product in both orders and verifying that the result is in both cases.  Similarly, here is a matrix over which is invertible: . The reader is encouraged to verify that the following matrix satisfies the properties of the inverse of : .      The Transpose of a Matrix  The transpose of a matrix is useful notation for some formulas that will appear later.    If , then the transpose of , denoted , is the element of whose rows are the columns of . In other words, for all and all .     The transpose is an easy way to turn a column vector into a row vector and vice versa.     If is the matrix , then is the matrix .    Some matrices are unaffected by taking the transpose. These deserve a special designation!    A matrix which is equal to its own transpose is called a symmetric matrix . (All symmetric matrices must be square by necessity.)    The following theorem collects some properties related to the transpose of a matrix. (Note that this theorem references the sum and scalar multiple of a matrix; the reader should understand these operations in the same way that addition and scalar multiplication of vectors in are understood.)    Let , let , and let . Then the following properties hold:    ;     ;     ; and     .       The first three parts of this theorem are immediate from the definitions and require no proof. To prove the fourth part, we will compare the -entry of both and . First, from the definition of the transpose and we see that . To compare, entry of is . Since multiplication is commutative in fields, these two expressions are equal.     While it might be more aesthetically pleasing if we did not have to switch the order of the multiplication when taking the transpose of a product, this type of formula makes sense when considering the dimensions of the matrices involved. If is and is , then the expression wouldn't even make sense unless . Further, reversing the order in a formula involving matrix multiplication is typical, as we have already seen in .      Let be the linear transformation which is rotation clockwise around the origin by radians. Find the matrix for . (Refer to .) Explain your process.    Consider the following two matrices and over : . Calculate both and .    Write down a matrix over which is symmetric. (See .)      Let , , and be the following matrices over : . For each of the following, determine whether the given calculation makes sense. If it does, find the requested matrix. (Do this by hand, without technology.) If it doesn't make sense, explain why it doesn't.                                    Let be the linear transformation which reflects a vector across the line . Find the matrix for .    Let be the linear transformation which projects a vector onto the line . Find the matrix for .    Let be the linear transformation which projects a vector onto the line . Find the matrix for .     Let be the linear transformation which rotates a vector counter-clockwise around the origin by an angle of radians. Find the matrix for . (Each entry in the matrix should be an expression involving .)    Writing Exercises   Let be invertible. Prove that is invertible and that .     Let .   Suppose that is left-invertible , meaning that there is an matrix such that . Prove that .    Suppose that is right-invertible , meaning that there is an matrix such that . Prove that .    Prove that any which is invertible must be a square matrix.       Prove .    In fields, we have the cancellation law for multiplication. If then . Does matrix multiplication have this property?  Let , , and be matrices over such that and make sense and are the same size. If , must it be true that ? Either prove this is true or provide a counter-example.    In fields, multiplication has the no zero divisors property. If , then either or . Does matrix multiplication have this property?  Let and be matrices over such that makes sense. Let be the matrix of the same size as consisting of all zeros. If , must it be true that either or is a matrix of all zeros? Either prove this is true or provide a counter-example.    Let be of the form .   What conditions must , , and satisfy so that ?    How many matrices in of this form have the property that ?        "
},
{
  "id": "note-matrix-times-ej",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#note-matrix-times-ej",
  "type": "Note",
  "number": "3.2.1",
  "title": "",
  "body": " If is an matrix with columns , and if we recall the definition of from , then . The truth of this equality comes by thinking of in the way expressed in , as a linear combination of the columns of with weights from the entries in .  "
},
{
  "id": "thm-matrix-of-lin-trans",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#thm-matrix-of-lin-trans",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": "  If is a linear transformation, then there exists a unique matrix over such that for all .   "
},
{
  "id": "examp-rotate-reflect-2",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#examp-rotate-reflect-2",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  We take our notation from . Let be the linear transformation which reflects a vector in the Cartesian plane across the -axis, and let be the linear transformation which rotates a vector counter-clockwise around the origin by radians. In this example we will find the matrices and such that and for all .  In the proof of , we saw that the way to form the matrix of a linear transformation is to calculate the image of the vectors . In this context, we need to calculate the image of and under and .  The calculations we seek are below: . This tells us that the matrices and are as follows: . Any curious reader can check that these matrices are correct by choosing a vector in and multiplying by and by separately. The results should align with the actions of and , respectively.   "
},
{
  "id": "def-matrix-mult",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#def-matrix-mult",
  "type": "Definition",
  "number": "3.2.4",
  "title": "",
  "body": "  Let be a matrix over a field and let be an matrix over . Then the matrix product  is the unique matrix over such that for all , .   "
},
{
  "id": "matrix-dimensions-multiplication",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#matrix-dimensions-multiplication",
  "type": "Note",
  "number": "3.2.5",
  "title": "",
  "body": " When we take the matrix product , the number of columns of must match the number of rows of . The matrix product makes no sense (and cannot be computed) otherwise. The matrix then has the same number of rows as and the same number of columns as .  "
},
{
  "id": "subsec-matrix-mult-13",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#subsec-matrix-mult-13",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": "  Let and be the following matrices over : . Note that the product makes sense since the number of columns of is the same as the number of rows of . Here is the matrix product: . Since the sizes of and allow it, we can also calculate in this example: . Finally, we observe that .   "
},
{
  "id": "subsec-matrix-mult-14",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#subsec-matrix-mult-14",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Let and be the following matrices over : . Since is and is , we can calculate , which will be . (In this example we cannot calculate .) Here is the matrix product: . To obtain the last equality, we remember that we are working in .   "
},
{
  "id": "subsec-matrix-mult-16",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#subsec-matrix-mult-16",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  We return to and consider the linear transformations , where reflects a vector in the Cartesian plane across the -axis and rotates a vector counter-clockwise around the origin by radians. In the previous example, we calculated the matrices and for and , respectively. What is the matrix for ?  We have defined matrix multiplication to answer exactly this question. We only need to multiply the matrices in the proper order. The matrix for is . A related question in this context is whether or not linear transformations commute . In other words, is ? For this example, answering that question boils down to comparing the matrix product with the product which we have just calculated: . From this we can see that and are two distinct linear transformations.   "
},
{
  "id": "subsec-matrix-mult-18",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#subsec-matrix-mult-18",
  "type": "Note",
  "number": "3.2.9",
  "title": "",
  "body": " For a field , the notation denotes the set of all matrices over . When , we will use the notation instead of .  "
},
{
  "id": "thm-matrix-mult-facts",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#thm-matrix-mult-facts",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "",
  "body": "  Let , , and . Then    ,     , and     .      "
},
{
  "id": "prop-matrix-mult",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#prop-matrix-mult",
  "type": "Proposition",
  "number": "3.2.11",
  "title": "",
  "body": "  Let , , and let the columns of be . Then the columns of are .    By our definition of the matrix product, for each we have . The observation in means that , so we have . Since is the th column of , this proves the proposition.   "
},
{
  "id": "def-invertible-matrix",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#def-invertible-matrix",
  "type": "Definition",
  "number": "3.2.12",
  "title": "",
  "body": "  Let . The matrix is an inverse matrix for if .  If a matrix has an inverse, we say that is invertible or non-singular . If is a matrix for which no inverse matrix exists, we say that is singular or not invertible.   "
},
{
  "id": "prop-matrix-inverse-unique",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#prop-matrix-inverse-unique",
  "type": "Proposition",
  "number": "3.2.13",
  "title": "",
  "body": "  If a matrix has an inverse, that inverse is unique.    Let and suppose that both are inverses for . Then we have .   "
},
{
  "id": "prop-matrix-inverse-product",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#prop-matrix-inverse-product",
  "type": "Proposition",
  "number": "3.2.14",
  "title": "",
  "body": "  Suppose that are both invertible. Then is invertible as well and .    If and are both invertible, then both and exist. Since matrix multiplication is associative, the following calculations show that the matrix satisfies the properties of the inverse of , thereby making invertible: .   "
},
{
  "id": "prop-matrix-inverse-involution",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#prop-matrix-inverse-involution",
  "type": "Proposition",
  "number": "3.2.15",
  "title": "",
  "body": "  Let be invertible. Then is also invertible and .   "
},
{
  "id": "examp-inverse-matrices",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#examp-inverse-matrices",
  "type": "Example",
  "number": "3.2.16",
  "title": "",
  "body": "  Consider the following matrix : . We can verify that is by computing the product in both orders and verifying that the result is in both cases.  Similarly, here is a matrix over which is invertible: . The reader is encouraged to verify that the following matrix satisfies the properties of the inverse of : .   "
},
{
  "id": "def-transpose",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#def-transpose",
  "type": "Definition",
  "number": "3.2.17",
  "title": "",
  "body": "  If , then the transpose of , denoted , is the element of whose rows are the columns of . In other words, for all and all .   "
},
{
  "id": "subsec-matrix-transpose-4",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#subsec-matrix-transpose-4",
  "type": "Note",
  "number": "3.2.18",
  "title": "",
  "body": " The transpose is an easy way to turn a column vector into a row vector and vice versa.  "
},
{
  "id": "subsec-matrix-transpose-5",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#subsec-matrix-transpose-5",
  "type": "Example",
  "number": "3.2.19",
  "title": "",
  "body": "  If is the matrix , then is the matrix .   "
},
{
  "id": "def-symmetric-matrix",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#def-symmetric-matrix",
  "type": "Definition",
  "number": "3.2.20",
  "title": "",
  "body": "  A matrix which is equal to its own transpose is called a symmetric matrix . (All symmetric matrices must be square by necessity.)   "
},
{
  "id": "thm-properties-transpose",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#thm-properties-transpose",
  "type": "Theorem",
  "number": "3.2.21",
  "title": "",
  "body": "  Let , let , and let . Then the following properties hold:    ;     ;     ; and     .       The first three parts of this theorem are immediate from the definitions and require no proof. To prove the fourth part, we will compare the -entry of both and . First, from the definition of the transpose and we see that . To compare, entry of is . Since multiplication is commutative in fields, these two expressions are equal.   "
},
{
  "id": "subsec-matrix-transpose-10",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#subsec-matrix-transpose-10",
  "type": "Note",
  "number": "3.2.22",
  "title": "",
  "body": " While it might be more aesthetically pleasing if we did not have to switch the order of the multiplication when taking the transpose of a product, this type of formula makes sense when considering the dimensions of the matrices involved. If is and is , then the expression wouldn't even make sense unless . Further, reversing the order in a formula involving matrix multiplication is typical, as we have already seen in .  "
},
{
  "id": "sec-matrix-linear-trans-7-1",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-7-1",
  "type": "Reading Question",
  "number": "3.2.5.1",
  "title": "",
  "body": " Let be the linear transformation which is rotation clockwise around the origin by radians. Find the matrix for . (Refer to .) Explain your process.  "
},
{
  "id": "sec-matrix-linear-trans-7-2",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-7-2",
  "type": "Reading Question",
  "number": "3.2.5.2",
  "title": "",
  "body": " Consider the following two matrices and over : . Calculate both and .  "
},
{
  "id": "sec-matrix-linear-trans-7-3",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-7-3",
  "type": "Reading Question",
  "number": "3.2.5.3",
  "title": "",
  "body": " Write down a matrix over which is symmetric. (See .)  "
},
{
  "id": "sec-matrix-linear-trans-8-1",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-1",
  "type": "Exercise",
  "number": "3.2.6.1",
  "title": "",
  "body": " Let , , and be the following matrices over : . For each of the following, determine whether the given calculation makes sense. If it does, find the requested matrix. (Do this by hand, without technology.) If it doesn't make sense, explain why it doesn't.                                  "
},
{
  "id": "sec-matrix-linear-trans-8-2",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-2",
  "type": "Exercise",
  "number": "3.2.6.2",
  "title": "",
  "body": " Let be the linear transformation which reflects a vector across the line . Find the matrix for .  "
},
{
  "id": "sec-matrix-linear-trans-8-3",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-3",
  "type": "Exercise",
  "number": "3.2.6.3",
  "title": "",
  "body": " Let be the linear transformation which projects a vector onto the line . Find the matrix for .  "
},
{
  "id": "sec-matrix-linear-trans-8-4",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-4",
  "type": "Exercise",
  "number": "3.2.6.4",
  "title": "",
  "body": " Let be the linear transformation which projects a vector onto the line . Find the matrix for .  "
},
{
  "id": "sec-matrix-linear-trans-8-5",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-5",
  "type": "Exercise",
  "number": "3.2.6.5",
  "title": "",
  "body": " Let be the linear transformation which rotates a vector counter-clockwise around the origin by an angle of radians. Find the matrix for . (Each entry in the matrix should be an expression involving .)  "
},
{
  "id": "sec-matrix-linear-trans-8-6-2",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-6-2",
  "type": "Exercise",
  "number": "3.2.6.6",
  "title": "",
  "body": " Let be invertible. Prove that is invertible and that .  "
},
{
  "id": "sec-matrix-linear-trans-8-6-3",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-6-3",
  "type": "Exercise",
  "number": "3.2.6.7",
  "title": "",
  "body": " Let .   Suppose that is left-invertible , meaning that there is an matrix such that . Prove that .    Suppose that is right-invertible , meaning that there is an matrix such that . Prove that .    Prove that any which is invertible must be a square matrix.     "
},
{
  "id": "sec-matrix-linear-trans-8-6-4",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-6-4",
  "type": "Exercise",
  "number": "3.2.6.8",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "sec-matrix-linear-trans-8-6-5",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-6-5",
  "type": "Exercise",
  "number": "3.2.6.9",
  "title": "",
  "body": " In fields, we have the cancellation law for multiplication. If then . Does matrix multiplication have this property?  Let , , and be matrices over such that and make sense and are the same size. If , must it be true that ? Either prove this is true or provide a counter-example.  "
},
{
  "id": "sec-matrix-linear-trans-8-6-6",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-6-6",
  "type": "Exercise",
  "number": "3.2.6.10",
  "title": "",
  "body": " In fields, multiplication has the no zero divisors property. If , then either or . Does matrix multiplication have this property?  Let and be matrices over such that makes sense. Let be the matrix of the same size as consisting of all zeros. If , must it be true that either or is a matrix of all zeros? Either prove this is true or provide a counter-example.  "
},
{
  "id": "sec-matrix-linear-trans-8-6-7",
  "level": "2",
  "url": "sec-matrix-linear-trans.html#sec-matrix-linear-trans-8-6-7",
  "type": "Exercise",
  "number": "3.2.6.11",
  "title": "",
  "body": " Let be of the form .   What conditions must , , and satisfy so that ?    How many matrices in of this form have the property that ?     "
},
{
  "id": "sec-inverting-matrix",
  "level": "1",
  "url": "sec-inverting-matrix.html",
  "type": "Section",
  "number": "3.3",
  "title": "Inverting a Matrix",
  "body": " Inverting a Matrix   In , we introduced the definition of an invertible matrix and discussed some properties of the inverse of a matrix. We will now introduce a method to determine whether or not a matrix is invertible. Additionally, when a matrix is invertible we will be able to calculate its inverse.    Elementary Matrices  The method we will present in this section begins with a simple definition.    An elementary matrix is one that is formed by performing a single elementary row operation on an identity matrix.    Because elementary matrices are related to elementary row operations, there are three types of elementary matrices. The following example provides one elementary matrix of each type.    Our first elementary matrix results from switching the second and third rows in : . Next we will look at a matrix which comes about by adding 4 times the first row of to the second row: . Finally, we have a matrix which is formed by multiplying the second row of by 7: .    Multiplying by an elementary matrix has the effect of carrying out an elementary row operation. In other words, if the matrix results from applying an elementary row operation to , and if is another matrix, then is the matrix after this same elementary row operation has been applied. We will demonstrate this in an example before stating the relevant theorem. (The proof of the theorem is saved for the exercises.)    Let be the following matrix over : . If we label as the matrix in , then we can calculate : . The reader can verify that is the result of adding four times the first row of to the second row of .      If the elementary matrix results from performing an elementary row operation on , and if is an matrix, then is the matrix that results from applying this same elementary row operation to .    Each elementary row operation is reversible in the sense that there is another elementary row operation which reverses the work that was done by the first. (This appears as .) We can use this fact to establish the following useful proposition.    Every elementary matrix is invertible.    Let be an elementary matrix and let denote the elementary matrix which represents the reverse elementary row operation from . By the definition of these matrices and , we see that . This shows that and are inverses of each other and, in particular, this proves that is invertible.    We will now connect elementary matrices to the RREF of a matrix in the following proposition. This is largely a restatement of using elementary matrices.    If , then there exists in RREF and elementary matrices such that .    Since each matrix can be reduced to a matrix in RREF, and since elementary row operations are accomplished by multiplying by elementary matrices, there exist elementary matrices such that . Since elementary matrices are invertible, by repeated application of we see that is invertible and . Then we have . We note that each is an elementary matrix, and if we define for each , we have our result.      Finding the Inverse of a Matrix  We will now move on to develop an algorithm for finding the inverse of a matrix (when one exists). We need a lemma before stating our most important result of the section.    If is invertible, then for every , the equation has a unique solution.    Let be any vector in . Since is invertible, exists, and we can show that is a solution to the equation : . To show that this solution is unique, suppose is another solution to this equation, so . Then we have .      A matrix is invertible if and only if is row equivalent to . When is invertible, any sequence of elementary row operations that reduces to also transforms into .    If is invertible, then by the equation has a unique solution for every . Now means that the RREF of has a pivot in each of its columns. Since is square, this means the RREF has a pivot in each row as well, meaning that the RREF of must be .  Conversely, suppose that is row equivalent to . By , there exist elementary matrices such that . This means that , and since the product of invertible matrices is invertible, this proves that is invertible.  If we multiply both sides of by , we get , which shows the sequence of elementary row operations (through multiplication by elementary matrices) used to transform into . On the other hand, if we take the equation from the previous paragraph and invert both sides, we get , which we can easily adjust to . This establishes the final claim in the theorem.    This theorem provides an algorithm for us to determine when a matrix is invertible and, in the case it is invertible, to calculate its inverse.    In order to determine whether or not a matrix is invertible, follow these steps.   Reduce the matrix to its RREF.    If the RREF has the form , then is invertible and .    If the RREF does not have in its left columns, then is not invertible.       We will end this section with several examples in which we work through this algorithm.    Consider the following matrix : . To determine whether or not this matrix is invertible, we row reduce the matrix : . We see that is invertible and that .      Consider the following matrix : . We now row reduce to determine whether or not is invertible. We find that is row equivalent to . This calculation shows that is not invertible.      Consider the following matrix : . We now row reduce : . This proves that is invertible and that .       Consider the following matrix defined over : . Write down elementary matrices which reduce to . In other words, find elementary matrices such that .     Consider the following matrix defined over : . Determine whether or not is invertible. Explain your answer. If is invertible, find the inverse.       For each of the following matrices , find the RREF of (call it ), and elementary matrices such that .    :      :      :        For each of the following matrices , find the RREF of (call it ), and elementary matrices such that .    :      :        For each of the following matrices in , determine whether or not is invertible using the algorithm from this section. In the cases where is invertible, find the inverse.                For each of the following matrices in , determine whether or not is invertible using the algorithm from this section. In the cases where is invertible, find the inverse.                Use an inverse matrix to solve the following linear system over : .    Use an inverse matrix to solve the following linear system over : .    Use an inverse matrix to solve the following linear system over : .    Writing Exercises   Suppose , where and are matrices.   Show that if is invertible, then .    Provide an example where but is not invertible and .       Suppose that , where and are matrices and is the zero matrix.   Show that if is invertible, then .    Provide an example where but is not invertible and .       Suppose that and are matrices and that is invertible. Prove that is invertible.    Suppose that is upper triangular and invertible. (A matrix is upper triangular when all entries below the main diagonal are .) Prove that is also upper triangular.    How many matrices in are invertible? What proportion of the matrices in are invertible?    How many matrices in are invertible? What proportion of the matrices in are invertible?    Prove . (You will need three cases.)      "
},
{
  "id": "def-elementary-matrix",
  "level": "2",
  "url": "sec-inverting-matrix.html#def-elementary-matrix",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  An elementary matrix is one that is formed by performing a single elementary row operation on an identity matrix.   "
},
{
  "id": "subsec-elementary-matrices-5",
  "level": "2",
  "url": "sec-inverting-matrix.html#subsec-elementary-matrices-5",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Our first elementary matrix results from switching the second and third rows in : . Next we will look at a matrix which comes about by adding 4 times the first row of to the second row: . Finally, we have a matrix which is formed by multiplying the second row of by 7: .   "
},
{
  "id": "subsec-elementary-matrices-7",
  "level": "2",
  "url": "sec-inverting-matrix.html#subsec-elementary-matrices-7",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Let be the following matrix over : . If we label as the matrix in , then we can calculate : . The reader can verify that is the result of adding four times the first row of to the second row of .   "
},
{
  "id": "thm-el-matrices-action",
  "level": "2",
  "url": "sec-inverting-matrix.html#thm-el-matrices-action",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "",
  "body": "  If the elementary matrix results from performing an elementary row operation on , and if is an matrix, then is the matrix that results from applying this same elementary row operation to .   "
},
{
  "id": "prop-el-matrices-invertible",
  "level": "2",
  "url": "sec-inverting-matrix.html#prop-el-matrices-invertible",
  "type": "Proposition",
  "number": "3.3.5",
  "title": "",
  "body": "  Every elementary matrix is invertible.    Let be an elementary matrix and let denote the elementary matrix which represents the reverse elementary row operation from . By the definition of these matrices and , we see that . This shows that and are inverses of each other and, in particular, this proves that is invertible.   "
},
{
  "id": "prop-el-matrices-rref",
  "level": "2",
  "url": "sec-inverting-matrix.html#prop-el-matrices-rref",
  "type": "Proposition",
  "number": "3.3.6",
  "title": "",
  "body": "  If , then there exists in RREF and elementary matrices such that .    Since each matrix can be reduced to a matrix in RREF, and since elementary row operations are accomplished by multiplying by elementary matrices, there exist elementary matrices such that . Since elementary matrices are invertible, by repeated application of we see that is invertible and . Then we have . We note that each is an elementary matrix, and if we define for each , we have our result.   "
},
{
  "id": "lem-inv-matrix-unique-sol",
  "level": "2",
  "url": "sec-inverting-matrix.html#lem-inv-matrix-unique-sol",
  "type": "Lemma",
  "number": "3.3.7",
  "title": "",
  "body": "  If is invertible, then for every , the equation has a unique solution.    Let be any vector in . Since is invertible, exists, and we can show that is a solution to the equation : . To show that this solution is unique, suppose is another solution to this equation, so . Then we have .   "
},
{
  "id": "thm-find-inverse-matrix",
  "level": "2",
  "url": "sec-inverting-matrix.html#thm-find-inverse-matrix",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "",
  "body": "  A matrix is invertible if and only if is row equivalent to . When is invertible, any sequence of elementary row operations that reduces to also transforms into .    If is invertible, then by the equation has a unique solution for every . Now means that the RREF of has a pivot in each of its columns. Since is square, this means the RREF has a pivot in each row as well, meaning that the RREF of must be .  Conversely, suppose that is row equivalent to . By , there exist elementary matrices such that . This means that , and since the product of invertible matrices is invertible, this proves that is invertible.  If we multiply both sides of by , we get , which shows the sequence of elementary row operations (through multiplication by elementary matrices) used to transform into . On the other hand, if we take the equation from the previous paragraph and invert both sides, we get , which we can easily adjust to . This establishes the final claim in the theorem.   "
},
{
  "id": "alg-matrix-inverse",
  "level": "2",
  "url": "sec-inverting-matrix.html#alg-matrix-inverse",
  "type": "Algorithm",
  "number": "3.3.9",
  "title": "",
  "body": "  In order to determine whether or not a matrix is invertible, follow these steps.   Reduce the matrix to its RREF.    If the RREF has the form , then is invertible and .    If the RREF does not have in its left columns, then is not invertible.      "
},
{
  "id": "subsec-finding-inverses-8",
  "level": "2",
  "url": "sec-inverting-matrix.html#subsec-finding-inverses-8",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": "  Consider the following matrix : . To determine whether or not this matrix is invertible, we row reduce the matrix : . We see that is invertible and that .   "
},
{
  "id": "subsec-finding-inverses-9",
  "level": "2",
  "url": "sec-inverting-matrix.html#subsec-finding-inverses-9",
  "type": "Example",
  "number": "3.3.11",
  "title": "",
  "body": "  Consider the following matrix : . We now row reduce to determine whether or not is invertible. We find that is row equivalent to . This calculation shows that is not invertible.   "
},
{
  "id": "subsec-finding-inverses-10",
  "level": "2",
  "url": "sec-inverting-matrix.html#subsec-finding-inverses-10",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": "  Consider the following matrix : . We now row reduce : . This proves that is invertible and that .   "
},
{
  "id": "sec-inverting-matrix-5-1",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-5-1",
  "type": "Reading Question",
  "number": "3.3.3.1",
  "title": "",
  "body": " Consider the following matrix defined over : . Write down elementary matrices which reduce to . In other words, find elementary matrices such that .   "
},
{
  "id": "sec-inverting-matrix-5-2",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-5-2",
  "type": "Reading Question",
  "number": "3.3.3.2",
  "title": "",
  "body": " Consider the following matrix defined over : . Determine whether or not is invertible. Explain your answer. If is invertible, find the inverse.   "
},
{
  "id": "sec-inverting-matrix-6-1",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-1",
  "type": "Exercise",
  "number": "3.3.4.1",
  "title": "",
  "body": " For each of the following matrices , find the RREF of (call it ), and elementary matrices such that .    :      :      :      "
},
{
  "id": "sec-inverting-matrix-6-2",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-2",
  "type": "Exercise",
  "number": "3.3.4.2",
  "title": "",
  "body": " For each of the following matrices , find the RREF of (call it ), and elementary matrices such that .    :      :      "
},
{
  "id": "sec-inverting-matrix-6-3",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-3",
  "type": "Exercise",
  "number": "3.3.4.3",
  "title": "",
  "body": " For each of the following matrices in , determine whether or not is invertible using the algorithm from this section. In the cases where is invertible, find the inverse.              "
},
{
  "id": "sec-inverting-matrix-6-4",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-4",
  "type": "Exercise",
  "number": "3.3.4.4",
  "title": "",
  "body": " For each of the following matrices in , determine whether or not is invertible using the algorithm from this section. In the cases where is invertible, find the inverse.              "
},
{
  "id": "sec-inverting-matrix-6-5",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-5",
  "type": "Exercise",
  "number": "3.3.4.5",
  "title": "",
  "body": " Use an inverse matrix to solve the following linear system over : .  "
},
{
  "id": "sec-inverting-matrix-6-6",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-6",
  "type": "Exercise",
  "number": "3.3.4.6",
  "title": "",
  "body": " Use an inverse matrix to solve the following linear system over : .  "
},
{
  "id": "sec-inverting-matrix-6-7",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-7",
  "type": "Exercise",
  "number": "3.3.4.7",
  "title": "",
  "body": " Use an inverse matrix to solve the following linear system over : .  "
},
{
  "id": "sec-inverting-matrix-6-8-2",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-8-2",
  "type": "Exercise",
  "number": "3.3.4.8",
  "title": "",
  "body": " Suppose , where and are matrices.   Show that if is invertible, then .    Provide an example where but is not invertible and .     "
},
{
  "id": "sec-inverting-matrix-6-8-3",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-8-3",
  "type": "Exercise",
  "number": "3.3.4.9",
  "title": "",
  "body": " Suppose that , where and are matrices and is the zero matrix.   Show that if is invertible, then .    Provide an example where but is not invertible and .     "
},
{
  "id": "exer-invertible-product",
  "level": "2",
  "url": "sec-inverting-matrix.html#exer-invertible-product",
  "type": "Exercise",
  "number": "3.3.4.10",
  "title": "",
  "body": " Suppose that and are matrices and that is invertible. Prove that is invertible.  "
},
{
  "id": "sec-inverting-matrix-6-8-5",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-8-5",
  "type": "Exercise",
  "number": "3.3.4.11",
  "title": "",
  "body": " Suppose that is upper triangular and invertible. (A matrix is upper triangular when all entries below the main diagonal are .) Prove that is also upper triangular.  "
},
{
  "id": "sec-inverting-matrix-6-8-6",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-8-6",
  "type": "Exercise",
  "number": "3.3.4.12",
  "title": "",
  "body": " How many matrices in are invertible? What proportion of the matrices in are invertible?  "
},
{
  "id": "sec-inverting-matrix-6-8-7",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-8-7",
  "type": "Exercise",
  "number": "3.3.4.13",
  "title": "",
  "body": " How many matrices in are invertible? What proportion of the matrices in are invertible?  "
},
{
  "id": "sec-inverting-matrix-6-8-8",
  "level": "2",
  "url": "sec-inverting-matrix.html#sec-inverting-matrix-6-8-8",
  "type": "Exercise",
  "number": "3.3.4.14",
  "title": "",
  "body": " Prove . (You will need three cases.)  "
},
{
  "id": "sec-subspaces-lt",
  "level": "1",
  "url": "sec-subspaces-lt.html",
  "type": "Section",
  "number": "3.4",
  "title": "Subspaces and Linear Transformations",
  "body": " Subspaces and Linear Transformations   Every linear transformation between vector spaces brings with it some descriptions of related subspaces of the domain and codomain. We will explore some of these subspaces in this section.    The Kernel of a Linear Transformation  The kernel of a linear transformation is the set of all vectors that sends to the zero vector.    If is a linear transformation between vector spaces, then the kernel of is the set .    While it may seem strange to single out the vectors that are sent to , this set reveals a lot about .    Let be a linear transformation. Then is a subspace of .    We will prove this theorem using the criteria for a subspace spelled out in . Since , we have . (The fact that is found in .)  Let . Using the additive property of and the fact that these vectors are in the kernel, we have .  Finally, we let and . Then we have . This calculation used the fact that was assumed to be in the kernel and the scalar multiplication property of .      Let be the set of all differentiable functions from . Let be the linear transformation which takes the derivative. (We proved a very similar function was a linear transformation in .) What is the kernel of ?  We recall from calculus that a function has for all in an interval if and only if is a constant function. This proves that is the set of all constant functions, and it further establishes that set as a subspace of .    While not all linear transformations are linked to matrices, some are. The kernel has an alternate name in those situations.    If , then the null space of is .    Since we have shown that the kernel is a subspace, the word space in the term null space is justified.  We also recall the link between matrix-vector equations like and linear systems. The definition of the null space shows that the set of solutions to a homogeneous linear system can be described as the null space of a matrix.    Let be the matrix . We can find by row reducing the matrix . Here is the RREF: . From this we see that , , and is free. In other words, any vector in looks like . So we have where .      There is an important fact contained in this last example. When we have a homogeneous system, we can always pay attention to just the coefficient matrix instead of the augmented matrix. No elementary row operation can produce a non-zero entry in a column of zeros.    The following theorem is one of the reasons that the kernel is so useful.    Let be a linear transformation. Then is injective if and only if .    We first suppose that is injective. (We recall the definition of injectivity from .) Since , the injectivity of implies that if for any . Therefore, .  Next, we suppose that . We want to prove that is injective, so we let with . We want to show that . By the linearity of we have . Since , we must have , meaning that . This proves that is injective.      Consider the linear transformation given by . To examine , we need to look at polynomials such that and . If , then and , so if , we must have and . This means that the only polynomial in is the zero polynomial. Therefore, is injective.    We now present one final fact related to the kernel.    Suppose that the linear system represented by the equation is consistent. Then this system has a unique solution if and only if .    We first assume that the system has a unique solution. Since the linear system is consistent, then there exists a vector such that . If , then , so is also a solution. But since there is a unique solution, we must have , so . This shows that .  We now assume that . From we know that the associated linear transformation is injective. Since the system is consistent, there must be only one vector that the transformation sends to so the system has a unique solution.      The Range as a Subspace  We have examined the kernel as a subspace of the domain of a linear transformation. We now turn our attention to a well-known subset of the codomain. The reader will be familiar with the range (or image) of a linear transformation. We can now prove that this is a subspace.    Let be a linear transformation between vector spaces over . Then is a subspace of .    Since we know that , it follows that . We now need to show the other properties demanded by .  If , then there exist vectors with and . Then, using the linearity of , we have . This proves that , so is closed under addition.  Finally, we let and , so there exists a vector such that . Then, using the fact that is a linear transformation, we have , which proves that . Thus, is closed under scalar multiplication. We conclude that is a subspace of .    As usual, when our linear transformation is linked to a matrix, we have more to say.    If , then the column space of , written , is the set of all linear combinations of the columns of . If , then .    When we introduced the matrix-vector product in , we noted that is a linear combination of the columns of with weights coming from the entries in . So, a vector in can be written as for some . Therefore, another way to write the column space is . From this description, we can see that the column space of a matrix and the range of a linear transformation are the same.    If is a linear transformation given by multiplication by a matrix , then .    We can also restate the consistency of linear systems using the language of the column space.    If , then the linear system is consistent if and only if .    Since the column space of a matrix is a subspace of the codomain of the associated linear transformation, there will be some occasions when that subspace is as large as it could be. The next theorem gives conditions for just that situation.    A set of vectors spans if and only if the RREF of the matrix has a pivot in every row.    The set of vectors spans if and only if for every . This happens when the linear system with augmented matrix is consistent for each .  We know from that a linear system over is consistent if and only if there is no pivot in the final column of the augmented matrix. If the RREF of has a pivot in every row, then there cannot be a pivot in the final column of the RREF of since each row already contains one pivot.  We will prove the contrapositive of the other implication. Suppose that the RREF of does not have a pivot in every row. We will create a vector in which is not in the span of this set of vectors. Since the RREF of does not have a pivot in every row, let the smallest row number with no pivot be . Form the augmented matrix with the RREF of and the vector . Now reverse the elementary row operations that were taken to reduce to its RREF. The result will be an augmented matrix which is related to an inconsistent system. (There will be a pivot in the final column of the RREF of this matrix. We constructed it this way!) This proves that the set does not span .      Define the vectors in as . How large is ?  We form the matrix and find the RREF: . Since there is a pivot in each row, the set spans .      Consider the following vectors in : . When we row reduce the matrix , we get . Since there is not a pivot in every row, the set does not span .       Let be the following matrix: . Let be the linear transformation which is multiplication by .   Calculate .    Is injective? Explain.       Consider the following three vectors in : . Does the set span ? Explain.      Consider the following matrix in : . For each of the following vectors , determine whether or not .                For each of the following matrices over , find by producing a set of vectors that spans .                Find a matrix so that the following set is : .    Let and be the following, with entries from : .   Show that and .    Explain why it is not possible, for this particular matrix , to find a non-zero vector in .    Is it possible to find a matrix such that there exists a non-zero vector in ? Justify your answer thoroughly.       Consider the following linear transformation : . This is not injective. Find distinct vectors and in such that .    Consider the following linear transformation : . This is not surjective. Find a vector such that is not in the image of .    Consider the following linear transformation : .   Either prove or disprove that is injective.    Either prove or disprove that is surjective.       Consider the following linear transformation : .   Either prove or disprove that is injective.    Either prove or disprove that is surjective.       Consider the following linear transformation : .   Either prove or disprove that is injective.    Either prove or disprove that is surjective.       For each of the following, consider a linear transformation which is multiplication by the given matrix . In each case, determine whether or not is injective and whether or not is surjective. Explain your answers.                          Writing Exercises   Suppose that is a linear transformation between vector spaces over . If is a subspace of , prove that is a subspace of , where .    Suppose that is a linear transformation between vector spaces over . If is a subspace of , define the set by . Prove that is a subspace of .    Let and let . Prove that .    Prove that if , then no set of vectors can span .     "
},
{
  "id": "def-kernel",
  "level": "2",
  "url": "sec-subspaces-lt.html#def-kernel",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  If is a linear transformation between vector spaces, then the kernel of is the set .   "
},
{
  "id": "thm-kernel-subspace",
  "level": "2",
  "url": "sec-subspaces-lt.html#thm-kernel-subspace",
  "type": "Theorem",
  "number": "3.4.2",
  "title": "",
  "body": "  Let be a linear transformation. Then is a subspace of .    We will prove this theorem using the criteria for a subspace spelled out in . Since , we have . (The fact that is found in .)  Let . Using the additive property of and the fact that these vectors are in the kernel, we have .  Finally, we let and . Then we have . This calculation used the fact that was assumed to be in the kernel and the scalar multiplication property of .   "
},
{
  "id": "subsec-kernel-6",
  "level": "2",
  "url": "sec-subspaces-lt.html#subsec-kernel-6",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  Let be the set of all differentiable functions from . Let be the linear transformation which takes the derivative. (We proved a very similar function was a linear transformation in .) What is the kernel of ?  We recall from calculus that a function has for all in an interval if and only if is a constant function. This proves that is the set of all constant functions, and it further establishes that set as a subspace of .   "
},
{
  "id": "def-null-space",
  "level": "2",
  "url": "sec-subspaces-lt.html#def-null-space",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  If , then the null space of is .   "
},
{
  "id": "examp-find-null-space",
  "level": "2",
  "url": "sec-subspaces-lt.html#examp-find-null-space",
  "type": "Example",
  "number": "3.4.5",
  "title": "",
  "body": "  Let be the matrix . We can find by row reducing the matrix . Here is the RREF: . From this we see that , , and is free. In other words, any vector in looks like . So we have where .   "
},
{
  "id": "subsec-kernel-12",
  "level": "2",
  "url": "sec-subspaces-lt.html#subsec-kernel-12",
  "type": "Note",
  "number": "3.4.6",
  "title": "",
  "body": "  There is an important fact contained in this last example. When we have a homogeneous system, we can always pay attention to just the coefficient matrix instead of the augmented matrix. No elementary row operation can produce a non-zero entry in a column of zeros.   "
},
{
  "id": "thm-injective-kernel",
  "level": "2",
  "url": "sec-subspaces-lt.html#thm-injective-kernel",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "",
  "body": "  Let be a linear transformation. Then is injective if and only if .    We first suppose that is injective. (We recall the definition of injectivity from .) Since , the injectivity of implies that if for any . Therefore, .  Next, we suppose that . We want to prove that is injective, so we let with . We want to show that . By the linearity of we have . Since , we must have , meaning that . This proves that is injective.   "
},
{
  "id": "subsec-kernel-15",
  "level": "2",
  "url": "sec-subspaces-lt.html#subsec-kernel-15",
  "type": "Example",
  "number": "3.4.8",
  "title": "",
  "body": "  Consider the linear transformation given by . To examine , we need to look at polynomials such that and . If , then and , so if , we must have and . This means that the only polynomial in is the zero polynomial. Therefore, is injective.   "
},
{
  "id": "cor-unique-soln",
  "level": "2",
  "url": "sec-subspaces-lt.html#cor-unique-soln",
  "type": "Corollary",
  "number": "3.4.9",
  "title": "",
  "body": "  Suppose that the linear system represented by the equation is consistent. Then this system has a unique solution if and only if .    We first assume that the system has a unique solution. Since the linear system is consistent, then there exists a vector such that . If , then , so is also a solution. But since there is a unique solution, we must have , so . This shows that .  We now assume that . From we know that the associated linear transformation is injective. Since the system is consistent, there must be only one vector that the transformation sends to so the system has a unique solution.   "
},
{
  "id": "thm-range-subspace",
  "level": "2",
  "url": "sec-subspaces-lt.html#thm-range-subspace",
  "type": "Theorem",
  "number": "3.4.10",
  "title": "",
  "body": "  Let be a linear transformation between vector spaces over . Then is a subspace of .    Since we know that , it follows that . We now need to show the other properties demanded by .  If , then there exist vectors with and . Then, using the linearity of , we have . This proves that , so is closed under addition.  Finally, we let and , so there exists a vector such that . Then, using the fact that is a linear transformation, we have , which proves that . Thus, is closed under scalar multiplication. We conclude that is a subspace of .   "
},
{
  "id": "def-column-space",
  "level": "2",
  "url": "sec-subspaces-lt.html#def-column-space",
  "type": "Definition",
  "number": "3.4.11",
  "title": "",
  "body": "  If , then the column space of , written , is the set of all linear combinations of the columns of . If , then .   "
},
{
  "id": "fact-range-col-space",
  "level": "2",
  "url": "sec-subspaces-lt.html#fact-range-col-space",
  "type": "Fact",
  "number": "3.4.12",
  "title": "",
  "body": "  If is a linear transformation given by multiplication by a matrix , then .   "
},
{
  "id": "fact-consistent-column-space",
  "level": "2",
  "url": "sec-subspaces-lt.html#fact-consistent-column-space",
  "type": "Fact",
  "number": "3.4.13",
  "title": "",
  "body": "  If , then the linear system is consistent if and only if .   "
},
{
  "id": "thm-vectors-span-fm",
  "level": "2",
  "url": "sec-subspaces-lt.html#thm-vectors-span-fm",
  "type": "Theorem",
  "number": "3.4.14",
  "title": "",
  "body": "  A set of vectors spans if and only if the RREF of the matrix has a pivot in every row.    The set of vectors spans if and only if for every . This happens when the linear system with augmented matrix is consistent for each .  We know from that a linear system over is consistent if and only if there is no pivot in the final column of the augmented matrix. If the RREF of has a pivot in every row, then there cannot be a pivot in the final column of the RREF of since each row already contains one pivot.  We will prove the contrapositive of the other implication. Suppose that the RREF of does not have a pivot in every row. We will create a vector in which is not in the span of this set of vectors. Since the RREF of does not have a pivot in every row, let the smallest row number with no pivot be . Form the augmented matrix with the RREF of and the vector . Now reverse the elementary row operations that were taken to reduce to its RREF. The result will be an augmented matrix which is related to an inconsistent system. (There will be a pivot in the final column of the RREF of this matrix. We constructed it this way!) This proves that the set does not span .   "
},
{
  "id": "subsec-range-12",
  "level": "2",
  "url": "sec-subspaces-lt.html#subsec-range-12",
  "type": "Example",
  "number": "3.4.15",
  "title": "",
  "body": "  Define the vectors in as . How large is ?  We form the matrix and find the RREF: . Since there is a pivot in each row, the set spans .   "
},
{
  "id": "subsec-range-13",
  "level": "2",
  "url": "sec-subspaces-lt.html#subsec-range-13",
  "type": "Example",
  "number": "3.4.16",
  "title": "",
  "body": "  Consider the following vectors in : . When we row reduce the matrix , we get . Since there is not a pivot in every row, the set does not span .   "
},
{
  "id": "sec-subspaces-lt-5-1",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-5-1",
  "type": "Reading Question",
  "number": "3.4.3.1",
  "title": "",
  "body": " Let be the following matrix: . Let be the linear transformation which is multiplication by .   Calculate .    Is injective? Explain.     "
},
{
  "id": "sec-subspaces-lt-5-2",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-5-2",
  "type": "Reading Question",
  "number": "3.4.3.2",
  "title": "",
  "body": " Consider the following three vectors in : . Does the set span ? Explain.  "
},
{
  "id": "sec-subspaces-lt-6-1",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-1",
  "type": "Exercise",
  "number": "3.4.4.1",
  "title": "",
  "body": " Consider the following matrix in : . For each of the following vectors , determine whether or not .              "
},
{
  "id": "sec-subspaces-lt-6-2",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-2",
  "type": "Exercise",
  "number": "3.4.4.2",
  "title": "",
  "body": " For each of the following matrices over , find by producing a set of vectors that spans .              "
},
{
  "id": "sec-subspaces-lt-6-3",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-3",
  "type": "Exercise",
  "number": "3.4.4.3",
  "title": "",
  "body": " Find a matrix so that the following set is : .  "
},
{
  "id": "sec-subspaces-lt-6-4",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-4",
  "type": "Exercise",
  "number": "3.4.4.4",
  "title": "",
  "body": " Let and be the following, with entries from : .   Show that and .    Explain why it is not possible, for this particular matrix , to find a non-zero vector in .    Is it possible to find a matrix such that there exists a non-zero vector in ? Justify your answer thoroughly.     "
},
{
  "id": "sec-subspaces-lt-6-5",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-5",
  "type": "Exercise",
  "number": "3.4.4.5",
  "title": "",
  "body": " Consider the following linear transformation : . This is not injective. Find distinct vectors and in such that .  "
},
{
  "id": "sec-subspaces-lt-6-6",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-6",
  "type": "Exercise",
  "number": "3.4.4.6",
  "title": "",
  "body": " Consider the following linear transformation : . This is not surjective. Find a vector such that is not in the image of .  "
},
{
  "id": "sec-subspaces-lt-6-7",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-7",
  "type": "Exercise",
  "number": "3.4.4.7",
  "title": "",
  "body": " Consider the following linear transformation : .   Either prove or disprove that is injective.    Either prove or disprove that is surjective.     "
},
{
  "id": "sec-subspaces-lt-6-8",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-8",
  "type": "Exercise",
  "number": "3.4.4.8",
  "title": "",
  "body": " Consider the following linear transformation : .   Either prove or disprove that is injective.    Either prove or disprove that is surjective.     "
},
{
  "id": "sec-subspaces-lt-6-9",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-9",
  "type": "Exercise",
  "number": "3.4.4.9",
  "title": "",
  "body": " Consider the following linear transformation : .   Either prove or disprove that is injective.    Either prove or disprove that is surjective.     "
},
{
  "id": "sec-subspaces-lt-6-10",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-10",
  "type": "Exercise",
  "number": "3.4.4.10",
  "title": "",
  "body": " For each of the following, consider a linear transformation which is multiplication by the given matrix . In each case, determine whether or not is injective and whether or not is surjective. Explain your answers.                        "
},
{
  "id": "sec-subspaces-lt-6-11-2",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-11-2",
  "type": "Exercise",
  "number": "3.4.4.11",
  "title": "",
  "body": " Suppose that is a linear transformation between vector spaces over . If is a subspace of , prove that is a subspace of , where .  "
},
{
  "id": "sec-subspaces-lt-6-11-3",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-11-3",
  "type": "Exercise",
  "number": "3.4.4.12",
  "title": "",
  "body": " Suppose that is a linear transformation between vector spaces over . If is a subspace of , define the set by . Prove that is a subspace of .  "
},
{
  "id": "sec-subspaces-lt-6-11-4",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-11-4",
  "type": "Exercise",
  "number": "3.4.4.13",
  "title": "",
  "body": " Let and let . Prove that .  "
},
{
  "id": "sec-subspaces-lt-6-11-5",
  "level": "2",
  "url": "sec-subspaces-lt.html#sec-subspaces-lt-6-11-5",
  "type": "Exercise",
  "number": "3.4.4.14",
  "title": "",
  "body": " Prove that if , then no set of vectors can span .  "
},
{
  "id": "sec-define-det",
  "level": "1",
  "url": "sec-define-det.html",
  "type": "Section",
  "number": "4.1",
  "title": "Defining the Determinant",
  "body": " Defining the Determinant   In the previous chapter, we learned an algorithm for finding the inverse of an invertible matrix . This algorithm also told us when a matrix is not invertible that is, when it is singular. The centerpiece of the algorithm was the row reduction of an matrix.  In this section, we will learn about the useful and powerful function called the determinant . The determinant by itself will not give us the inverse of a matrix, but it will reveal whether or not a matrix is invertible.    The Definition of the Determinant  In , we saw that when a matrix has the property that , is row equivalent to . (In that context we were working over , but this is true over any field.) The converse is also true, though we haven't yet established it.  If we connect this fact with , we see that when , the matrix is invertible. (We will see that the converse of this statement is also true.)  This quantity for is special it is the determinant of , and this relationship to invertibility will also hold for larger matrices. The goal of this section is to define a number for any matrix which functions the same way that does for a matrix.    For an matrix , we define to be the submatrix of that results from deleting row and column from .      If is the following matrix, , then the submatrices and are .    Perhaps surprisingly, this bit of notation is all we need to define the determinant. We note that this is a recursive definition, which means that the calculation happens in stages by reducing the size of the matrix.    Suppose that with , and let the entries of be denoted . Then the determinant of , denoted or , is defined as follows. If , then . If , then .    To calculate the determinant of an matrix, we need to know the determinant of a lot of submatrices in fact, we need to know the determinant of submatrices. The reader will appreciate that when we begin with a small matrix, this is a manageable calculation; when the matrix is larger, carrying out this calculation by hand would be a decidedly less pleasant task.    When , the formula for the determinant of reduces to the familiar expression with which we opened this section. Note that, in this case, and are both matrices. We have . This last expression is precisely with different symbols.    We will put our new definition to use in the following example.    Let be the following matrix over : . We will find using the formula: . We see that .      For the purposes of what follows, we will introduce another bit of notation. If , then the -cofactor of , denoted by , is . Our first determinant formula could then be written .      Additional Ways to Calculate the Determinant  The definition of the determinant uses the first row of the matrix as its home base for calculations. For this reason, the original formula is sometimes referred to as cofactor expansion along the first row of . A perhaps surprising result, and one we will not prove here because of its complicated nature, asserts that the determinant can be calculated using expansion along any row, not just the first.    Suppose that and that with . Then can be calculated using cofactor expansion across any row of . In other words, for any , we have .    Because we can target any row of a matrix in our calculation of the determinant, rows which contain several zero entries are particularly attractive.    We consider the following matrix : . Since we can expand along any row to calculate the determinant, and since the second row contains two zeros, we will expand along the second row. The zeros make it unnecessary to calculate the cofactors and : .    In addition to expanding along any row of a matrix to calculate the determinant, we can also use any column. Instead of proving this directly using the definition of the determinant, we will follow Beezer and prove that a matrix and its transpose have the same determinant. The result about using columns to calculate the determinant will follow.    Let . Then .    We will proceed using induction on the size of the matrix. When , a matrix and its transpose are identical, so trivially.  We now suppose that for any square matrix of size , the determinant of the matrix and its transpose are equal. In the calculation below, we will employ a trick at the beginning in order to have a second summation sign later on. The first equation here is true because taking the average of one number times will give the same quantity again. We will use the notation to indicate the -entry of . We have . By the definition of the transpose, we have and . So . We now invoke the induction hypothesis. Since is a square matrix of size , we have . This, along with , allows us to finish the argument: . As a final note, we were able to switch the summation signs toward the end of this calculation due to the fact that addition is commutative in any field .      Suppose that and that with . Then can be calculated using cofactor expansion along any column of . In other words, for any , we have .    We note that column of is the same as row of . So, calculating using expansion along column is the same as calculating using expansion along row . But since , this calculation will result in .    The following example shows how we can use this flexibility in calculating the determinant.    We will calculate the determinant of the following matrix: . Since the third column of has three zeros, we will expand along that column: . Just for this example, we will rename , so . Here is : . We will take advantage of the zero in the -entry of by expanding along the third row to calculate : . Since we determined that , this means that .    We will close this section with one final result, the proof of which will be . The truth of this proposition also relies on rows\/columns with many zeros. By a triangular matrix we mean either an upper triangular or a lower triangular matrix.    Let be a triangular matrix. Then is the product of the entries along the main diagonal of .       Compute the determinant of the matrix by cofactor expansion across the first row. Write out all of your calculations. .     Consider the following matrix : .   Compute the determinant of by cofactor expansion down the third column. Write out all of your calculations.     There is a better row or column to use for this calculation. Which one is it? Choose that row or column and compute the determinant of by cofactor expansion along that row or column. Why is this easier?          For each of the following matrices over , find the determinant by hand using cofactor expansion along a row or column of your choice.                For each of the following matrices over , find the determinant by hand using cofactor expansion along a row or column of your choice.                Consider the following matrix with entries in : . Find by hand using cofactor expansion along a row or column of your choice. (The answer should be a number in .)    For each of the following, write down the elementary matrix that performs the given elementary row operation on a matrix. Then, calculate the determinant of that elementary matrix.   Multiply row 2 by     Switch rows 2 and 3    Replace the third row with the sum of the third row and seven times the first row       Let . Write down the matrix . How are and related?    Let be a matrix over and let . Find a formula that relates to and .    Let be a matrix over . Find a value of so that or explain why it is not possible.    Let be the following matrix over : . Find a value of so that or explain why it is not possible.    Let be the following matrix over : . Find all values of such that .    Prove that the determinant of a triangular matrix is the product of the entries along the main diagonal.    Prove that if is a matrix and if is the result of switching the rows in , then .    Suppose that is a matrix and that is the result of applying the replace row operation to . Prove that .    "
},
{
  "id": "def-submatrix",
  "level": "2",
  "url": "sec-define-det.html#def-submatrix",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  For an matrix , we define to be the submatrix of that results from deleting row and column from .   "
},
{
  "id": "initial-defn-det-6",
  "level": "2",
  "url": "sec-define-det.html#initial-defn-det-6",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  If is the following matrix, , then the submatrices and are .   "
},
{
  "id": "def-determinant",
  "level": "2",
  "url": "sec-define-det.html#def-determinant",
  "type": "Definition",
  "number": "4.1.3",
  "title": "",
  "body": "  Suppose that with , and let the entries of be denoted . Then the determinant of , denoted or , is defined as follows. If , then . If , then .   "
},
{
  "id": "initial-defn-det-10",
  "level": "2",
  "url": "sec-define-det.html#initial-defn-det-10",
  "type": "Note",
  "number": "4.1.4",
  "title": "",
  "body": "  When , the formula for the determinant of reduces to the familiar expression with which we opened this section. Note that, in this case, and are both matrices. We have . This last expression is precisely with different symbols.   "
},
{
  "id": "initial-defn-det-12",
  "level": "2",
  "url": "sec-define-det.html#initial-defn-det-12",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Let be the following matrix over : . We will find using the formula: . We see that .   "
},
{
  "id": "initial-defn-det-13",
  "level": "2",
  "url": "sec-define-det.html#initial-defn-det-13",
  "type": "Note",
  "number": "4.1.6",
  "title": "",
  "body": "  For the purposes of what follows, we will introduce another bit of notation. If , then the -cofactor of , denoted by , is . Our first determinant formula could then be written .   "
},
{
  "id": "thm-det-any-row",
  "level": "2",
  "url": "sec-define-det.html#thm-det-any-row",
  "type": "Theorem",
  "number": "4.1.7",
  "title": "",
  "body": "  Suppose that and that with . Then can be calculated using cofactor expansion across any row of . In other words, for any , we have .   "
},
{
  "id": "subsec-det-alternative-5",
  "level": "2",
  "url": "sec-define-det.html#subsec-det-alternative-5",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  We consider the following matrix : . Since we can expand along any row to calculate the determinant, and since the second row contains two zeros, we will expand along the second row. The zeros make it unnecessary to calculate the cofactors and : .   "
},
{
  "id": "thm-det-transpose",
  "level": "2",
  "url": "sec-define-det.html#thm-det-transpose",
  "type": "Theorem",
  "number": "4.1.9",
  "title": "",
  "body": "  Let . Then .    We will proceed using induction on the size of the matrix. When , a matrix and its transpose are identical, so trivially.  We now suppose that for any square matrix of size , the determinant of the matrix and its transpose are equal. In the calculation below, we will employ a trick at the beginning in order to have a second summation sign later on. The first equation here is true because taking the average of one number times will give the same quantity again. We will use the notation to indicate the -entry of . We have . By the definition of the transpose, we have and . So . We now invoke the induction hypothesis. Since is a square matrix of size , we have . This, along with , allows us to finish the argument: . As a final note, we were able to switch the summation signs toward the end of this calculation due to the fact that addition is commutative in any field .   "
},
{
  "id": "cor-det-columns",
  "level": "2",
  "url": "sec-define-det.html#cor-det-columns",
  "type": "Corollary",
  "number": "4.1.10",
  "title": "",
  "body": "  Suppose that and that with . Then can be calculated using cofactor expansion along any column of . In other words, for any , we have .    We note that column of is the same as row of . So, calculating using expansion along column is the same as calculating using expansion along row . But since , this calculation will result in .   "
},
{
  "id": "subsec-det-alternative-10",
  "level": "2",
  "url": "sec-define-det.html#subsec-det-alternative-10",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  We will calculate the determinant of the following matrix: . Since the third column of has three zeros, we will expand along that column: . Just for this example, we will rename , so . Here is : . We will take advantage of the zero in the -entry of by expanding along the third row to calculate : . Since we determined that , this means that .   "
},
{
  "id": "prop-det-triangular",
  "level": "2",
  "url": "sec-define-det.html#prop-det-triangular",
  "type": "Proposition",
  "number": "4.1.12",
  "title": "",
  "body": "  Let be a triangular matrix. Then is the product of the entries along the main diagonal of .   "
},
{
  "id": "sec-define-det-5-1",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-5-1",
  "type": "Reading Question",
  "number": "4.1.3.1",
  "title": "",
  "body": " Compute the determinant of the matrix by cofactor expansion across the first row. Write out all of your calculations. .   "
},
{
  "id": "sec-define-det-5-2",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-5-2",
  "type": "Reading Question",
  "number": "4.1.3.2",
  "title": "",
  "body": " Consider the following matrix : .   Compute the determinant of by cofactor expansion down the third column. Write out all of your calculations.     There is a better row or column to use for this calculation. Which one is it? Choose that row or column and compute the determinant of by cofactor expansion along that row or column. Why is this easier?      "
},
{
  "id": "sec-define-det-6-1",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-1",
  "type": "Exercise",
  "number": "4.1.4.1",
  "title": "",
  "body": " For each of the following matrices over , find the determinant by hand using cofactor expansion along a row or column of your choice.              "
},
{
  "id": "sec-define-det-6-2",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-2",
  "type": "Exercise",
  "number": "4.1.4.2",
  "title": "",
  "body": " For each of the following matrices over , find the determinant by hand using cofactor expansion along a row or column of your choice.              "
},
{
  "id": "sec-define-det-6-3",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-3",
  "type": "Exercise",
  "number": "4.1.4.3",
  "title": "",
  "body": " Consider the following matrix with entries in : . Find by hand using cofactor expansion along a row or column of your choice. (The answer should be a number in .)  "
},
{
  "id": "sec-define-det-6-4",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-4",
  "type": "Exercise",
  "number": "4.1.4.4",
  "title": "",
  "body": " For each of the following, write down the elementary matrix that performs the given elementary row operation on a matrix. Then, calculate the determinant of that elementary matrix.   Multiply row 2 by     Switch rows 2 and 3    Replace the third row with the sum of the third row and seven times the first row     "
},
{
  "id": "sec-define-det-6-5",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-5",
  "type": "Exercise",
  "number": "4.1.4.5",
  "title": "",
  "body": " Let . Write down the matrix . How are and related?  "
},
{
  "id": "sec-define-det-6-6",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-6",
  "type": "Exercise",
  "number": "4.1.4.6",
  "title": "",
  "body": " Let be a matrix over and let . Find a formula that relates to and .  "
},
{
  "id": "sec-define-det-6-7",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-7",
  "type": "Exercise",
  "number": "4.1.4.7",
  "title": "",
  "body": " Let be a matrix over . Find a value of so that or explain why it is not possible.  "
},
{
  "id": "sec-define-det-6-8",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-8",
  "type": "Exercise",
  "number": "4.1.4.8",
  "title": "",
  "body": " Let be the following matrix over : . Find a value of so that or explain why it is not possible.  "
},
{
  "id": "sec-define-det-6-9",
  "level": "2",
  "url": "sec-define-det.html#sec-define-det-6-9",
  "type": "Exercise",
  "number": "4.1.4.9",
  "title": "",
  "body": " Let be the following matrix over : . Find all values of such that .  "
},
{
  "id": "exer-det-triangular",
  "level": "2",
  "url": "sec-define-det.html#exer-det-triangular",
  "type": "Exercise",
  "number": "4.1.4.10",
  "title": "",
  "body": " Prove that the determinant of a triangular matrix is the product of the entries along the main diagonal.  "
},
{
  "id": "exer-det-switch-rows",
  "level": "2",
  "url": "sec-define-det.html#exer-det-switch-rows",
  "type": "Exercise",
  "number": "4.1.4.11",
  "title": "",
  "body": " Prove that if is a matrix and if is the result of switching the rows in , then .  "
},
{
  "id": "exer-det-replace-row",
  "level": "2",
  "url": "sec-define-det.html#exer-det-replace-row",
  "type": "Exercise",
  "number": "4.1.4.12",
  "title": "",
  "body": " Suppose that is a matrix and that is the result of applying the replace row operation to . Prove that .  "
},
{
  "id": "sec-det-properties",
  "level": "1",
  "url": "sec-det-properties.html",
  "type": "Section",
  "number": "4.2",
  "title": "Properties of the Determinant",
  "body": " Properties of the Determinant   We have introduced the determinant, but we have not yet backed up our assertion that the determinant is useful or powerful . Our goal in this section is to establish just that. In particular, by the end of this section we will be able to conclude that the determinant gives a characterization of the invertibility of a square matrix.    The Determinant and Elementary Row Operations  In this subsection we will discover how elementary row operations affect the determinant of a matrix. These will be essential facts for proving the big theorems of this chapter. We begin with a result that is obvious in light of .    Let . If has a row of zeros, then .    To calculate , we use cofactor expansion along the row of zeros. This immediately shows that .     We observe that is also true if the word row is replaced by column since a matrix and its transpose have equal determinants. The reader should consider each result in this section and reflect on whether the statement would still hold after making the same word exchange.   Now, we examine the effect of the switch elementary row operation.    Let and let be the result of switching two rows in . Then .    We will proceed by induction on . This result only makes sense for , and the base case of was covered in .  We let be an integer such that and we assume the result is true for all matrices. Let be a matrix and let be the result of switching two rows in . We want to show that .  Since , we have , which means that we can calculate by expansion along a row that is not involved in the row exchange. Suppose that was produced by switching rows and . We will calculate by expanding along row , which is distinct from both and . We have . We note that since will never be or , and can be obtained by performing a switch row operation on . This means that, by the inductive hypothesis, we have for all since these matrices are . So, we have . This completes the inductive step.  We have shown that the result holds for all by the Principle of Mathematical Induction.    The second elementary row operation we will consider is the scale operation. How is the determinant of a matrix affected if one row is multiplied by a non-zero element of the field?    Let and let be the result of multiplying a row in by a non-zero . Then .    We will not need induction here. Suppose that is formed by multiplying row in by where . We will calculate by expanding along row . Note that since row is the only row affected by this operation, for all . Additionally, we note that for all . Now we have .    We now present the result related to the final elementary row operation, the replace operation.    Let and let be the result of replacing a row in with the sum of that row and times another row in . Then .    We proceed by induction on . This result only makes sense when , and the base case of is covered in .  We let be an integer such that and we assume the result is true for all matrices. Let be a matrix and let be the result of replacing row in with the sum of row and times row in . We want to show that .  We observe that is large enough that we can calculate by expanding along a row which is not row ; we will call it row . Since , we have for all . Additionally, for each , is a matrix which has been obtained from by a replace row operation. The inductive hypothesis means that for all . Therefore, we have the following: . This completes the inductive step.  We have shown that the result holds for all by the Principle of Mathematical Induction.    The following example shows how these three theorems can be used to calculate the determinant of a matrix using row reduction.    Let be the following matrix: . We will find using row reduction. We first switch rows 1 and 2, which introduces a negative sign: . Once we reduce the matrix to a triangular form, we can use , so we do not need to reduce the matrix to RREF, only to REF. This means that the rest of the row reduction can be performed using only the replace operation, which does not change the determinant: . We have reduced the matrix far enough so that we can calculate its determinant using the product of the entries along the main diagonal: .      Invertibility and the Determinant  We will use the results that have accumulated thus far in this section to prove two major results. First, we need to record an easy fact.    For any , we have .    Since the identity matrix is, among other things, a triangular matrix, applies. The entries along the main diagonal are all , so .    We will now apply this lemma to record the determinant of any elementary matrix.    Let be an elementary matrix.   If performs the switch elementary row operation, then .    If performs the scale elementary row operation, and if the scaling is by , then .    If performs the replace elementary row operation, then .       Every elementary matrix in is the result of performing a single elementary row operation on . We have theorems in this section which tell us how these elementary row operations affect the determinant of a matrix, and since from we know that , we will be able to arrive at our result.  If performs a switch row operation, then by we have .  If scales one row of a matrix by a non-zero , then by we have .  Finally, if performs a replace row operation, then by we have , which completes the proof.      Sometimes, the easiest way to find a determinant by hand is to use a combination of cofactor expansion and row reduction techniques. Let be the following matrix: . To find , we first use the replace row operation, using the in the position to put zeros in the column below it: . Since the replace row operation doesn't change the determinant, we have . We now use cofactor expansion along the first column to calculate . Since there is only one non-zero entry in that column, we have . We can now use the replace row operation three more times, to produce zeros in the , , and positions of this matrix: . We now invoke to see that . Since , we have .    In this next result, we use to show that the determinant respects matrix multiplication, at least when one of the factors is an elementary matrix.    Let , and let be an elementary matrix. Then .    This argument uses and requires three cases. If performs a switch row operation, then we know from that . Since we now know that , we have .  If performs a scale row operation, and if the scaling is by a non-zero , then we know from that . Since , we have .  Finally, if performs a replace row operation, then we know from that . We know that , so .    Armed with this result, we can now prove one of the most useful facts about determinants.    For any matrix over , is invertible if and only if .    For , let be the unique RREF of . From , we know there exist elementary matrices such that . We can apply repeatedly to see that . Since for each by , we conclude that if and only if .  We now assume that is invertible. tells us that , so . This proves one direction of the theorem.  We will prove the contrapositive of the other direction of the theorem. We now assume that is not invertible, which means that . Specifically, must have fewer than pivots, which means that must have at least one row of zeros. By we have . Therefore, we must also have .    If a casual math student spends some time away from linear algebra, this previous theorem might be the one and only fact they remember about the determinant. It is powerful and used frequently .    Using this theorem, if is , then we can say that is not invertible since .  We can also analyze the invertibility of matrices over other fields. Consider the matrix given by . We find that , so is not invertible. (If were a matrix over , we would have . But this means that, in , .)  Finally, we consider another matrix : . Since in , is invertible.    We present one final, important result about determinants in the last theorem of this chapter.    Let . Then .    If is not invertible, then neither is , by . This means that since, by , both sides of the equation are zero.  If is invertible, then is row equivalent to , and there exist elementary matrices such that . In the calculation that follows, we use this factorization as well as repeated application of . We first use to peel the determinant of elementary matrices away from ; we then use the same result to put those determinants back together to form . Here is the argument: . This completes the proof.    We take a step back for a moment to marvel at this theorem. We defined matrix multiplication in the context of the composition of linear transformations (see ), and the calculations were quite involved. The definition of the determinant was also complicated, so the fact that these two notions fit together so nicely is worthy of our admiration.    In this example, we will verify for a specific example. Let and be the following matrices: . We calculate as . We see that , , and , so the relationship holds.       Consider the following three matrices: .   Calculate using cofactor expansion along some row or column.     The matrix was obtained from by a single elementary row operation. Which one?     Knowing and given your answer to (b), what do you predict to be? (Consult .)     Calculate using cofactor expansion along some row or column.     The matrix was obtained from by a single elementary row operation. Which one?     Knowing and given your answer to (e), what do you predict to be? (Consult .)     Calculate using cofactor expansion along some row or column.        Verify for the following two matrices and : . (You should follow )       Find the determinant of the matrix using row reduction.                  Find the determinant of the matrix using row reduction.                  Find the determinant using a combination of row reduction and cofactor expansion: .     Find the determinant using a combination of row reduction and cofactor expansion: .     Use the determinant to determine whether or not the matrix is invertible. (Note that not all fields are !)    ,       ,       ,       ,       ,         Calculate if .     Suppose that is a square matrix with two identical columns. Prove that .    Suppose that is invertible. Prove that .       Suppose that and that . Prove that is not invertible.    Does the result or your argument in part (a) change if is replaced with ? Explain.       Suppose that . Show that regardless of whether or not .    Let and let . Find a formula for .       Verify that where , , and are .    Let and be . Show that if and only if .    Provide an example where to prove that is not always true.       Construct an invertible matrix . For each entry of , compute the corresponding cofactor. Create a new matrix with these cofactors in the same position as the entry of on which they were based; call this matrix . Calculate . What do you observe?    Consider the following matrix (called a Vandermond matrix): .   Use row operations to explain why .    Explain why is invertible if and only if , , and are all distinct real numbers.       "
},
{
  "id": "prop-det-row-zeros",
  "level": "2",
  "url": "sec-det-properties.html#prop-det-row-zeros",
  "type": "Proposition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let . If has a row of zeros, then .    To calculate , we use cofactor expansion along the row of zeros. This immediately shows that .   "
},
{
  "id": "det-elem-row-ops-4",
  "level": "2",
  "url": "sec-det-properties.html#det-elem-row-ops-4",
  "type": "Note",
  "number": "4.2.2",
  "title": "",
  "body": " We observe that is also true if the word row is replaced by column since a matrix and its transpose have equal determinants. The reader should consider each result in this section and reflect on whether the statement would still hold after making the same word exchange.  "
},
{
  "id": "thm-det-switch",
  "level": "2",
  "url": "sec-det-properties.html#thm-det-switch",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "  Let and let be the result of switching two rows in . Then .    We will proceed by induction on . This result only makes sense for , and the base case of was covered in .  We let be an integer such that and we assume the result is true for all matrices. Let be a matrix and let be the result of switching two rows in . We want to show that .  Since , we have , which means that we can calculate by expansion along a row that is not involved in the row exchange. Suppose that was produced by switching rows and . We will calculate by expanding along row , which is distinct from both and . We have . We note that since will never be or , and can be obtained by performing a switch row operation on . This means that, by the inductive hypothesis, we have for all since these matrices are . So, we have . This completes the inductive step.  We have shown that the result holds for all by the Principle of Mathematical Induction.   "
},
{
  "id": "thm-det-scale",
  "level": "2",
  "url": "sec-det-properties.html#thm-det-scale",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "",
  "body": "  Let and let be the result of multiplying a row in by a non-zero . Then .    We will not need induction here. Suppose that is formed by multiplying row in by where . We will calculate by expanding along row . Note that since row is the only row affected by this operation, for all . Additionally, we note that for all . Now we have .   "
},
{
  "id": "thm-det-replace",
  "level": "2",
  "url": "sec-det-properties.html#thm-det-replace",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  Let and let be the result of replacing a row in with the sum of that row and times another row in . Then .    We proceed by induction on . This result only makes sense when , and the base case of is covered in .  We let be an integer such that and we assume the result is true for all matrices. Let be a matrix and let be the result of replacing row in with the sum of row and times row in . We want to show that .  We observe that is large enough that we can calculate by expanding along a row which is not row ; we will call it row . Since , we have for all . Additionally, for each , is a matrix which has been obtained from by a replace row operation. The inductive hypothesis means that for all . Therefore, we have the following: . This completes the inductive step.  We have shown that the result holds for all by the Principle of Mathematical Induction.   "
},
{
  "id": "det-elem-row-ops-12",
  "level": "2",
  "url": "sec-det-properties.html#det-elem-row-ops-12",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "  Let be the following matrix: . We will find using row reduction. We first switch rows 1 and 2, which introduces a negative sign: . Once we reduce the matrix to a triangular form, we can use , so we do not need to reduce the matrix to RREF, only to REF. This means that the rest of the row reduction can be performed using only the replace operation, which does not change the determinant: . We have reduced the matrix far enough so that we can calculate its determinant using the product of the entries along the main diagonal: .   "
},
{
  "id": "lem-det-identity",
  "level": "2",
  "url": "sec-det-properties.html#lem-det-identity",
  "type": "Lemma",
  "number": "4.2.7",
  "title": "",
  "body": "  For any , we have .    Since the identity matrix is, among other things, a triangular matrix, applies. The entries along the main diagonal are all , so .   "
},
{
  "id": "prop-det-elem-matrices",
  "level": "2",
  "url": "sec-det-properties.html#prop-det-elem-matrices",
  "type": "Proposition",
  "number": "4.2.8",
  "title": "",
  "body": "  Let be an elementary matrix.   If performs the switch elementary row operation, then .    If performs the scale elementary row operation, and if the scaling is by , then .    If performs the replace elementary row operation, then .       Every elementary matrix in is the result of performing a single elementary row operation on . We have theorems in this section which tell us how these elementary row operations affect the determinant of a matrix, and since from we know that , we will be able to arrive at our result.  If performs a switch row operation, then by we have .  If scales one row of a matrix by a non-zero , then by we have .  Finally, if performs a replace row operation, then by we have , which completes the proof.   "
},
{
  "id": "subsec-det-main-results-6",
  "level": "2",
  "url": "sec-det-properties.html#subsec-det-main-results-6",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "  Sometimes, the easiest way to find a determinant by hand is to use a combination of cofactor expansion and row reduction techniques. Let be the following matrix: . To find , we first use the replace row operation, using the in the position to put zeros in the column below it: . Since the replace row operation doesn't change the determinant, we have . We now use cofactor expansion along the first column to calculate . Since there is only one non-zero entry in that column, we have . We can now use the replace row operation three more times, to produce zeros in the , , and positions of this matrix: . We now invoke to see that . Since , we have .   "
},
{
  "id": "thm-det-prod-elem",
  "level": "2",
  "url": "sec-det-properties.html#thm-det-prod-elem",
  "type": "Theorem",
  "number": "4.2.10",
  "title": "",
  "body": "  Let , and let be an elementary matrix. Then .    This argument uses and requires three cases. If performs a switch row operation, then we know from that . Since we now know that , we have .  If performs a scale row operation, and if the scaling is by a non-zero , then we know from that . Since , we have .  Finally, if performs a replace row operation, then we know from that . We know that , so .   "
},
{
  "id": "thm-det-invertible",
  "level": "2",
  "url": "sec-det-properties.html#thm-det-invertible",
  "type": "Theorem",
  "number": "4.2.11",
  "title": "",
  "body": "  For any matrix over , is invertible if and only if .    For , let be the unique RREF of . From , we know there exist elementary matrices such that . We can apply repeatedly to see that . Since for each by , we conclude that if and only if .  We now assume that is invertible. tells us that , so . This proves one direction of the theorem.  We will prove the contrapositive of the other direction of the theorem. We now assume that is not invertible, which means that . Specifically, must have fewer than pivots, which means that must have at least one row of zeros. By we have . Therefore, we must also have .   "
},
{
  "id": "subsec-det-main-results-12",
  "level": "2",
  "url": "sec-det-properties.html#subsec-det-main-results-12",
  "type": "Example",
  "number": "4.2.12",
  "title": "",
  "body": "  Using this theorem, if is , then we can say that is not invertible since .  We can also analyze the invertibility of matrices over other fields. Consider the matrix given by . We find that , so is not invertible. (If were a matrix over , we would have . But this means that, in , .)  Finally, we consider another matrix : . Since in , is invertible.   "
},
{
  "id": "thm-det-matrix-product",
  "level": "2",
  "url": "sec-det-properties.html#thm-det-matrix-product",
  "type": "Theorem",
  "number": "4.2.13",
  "title": "",
  "body": "  Let . Then .    If is not invertible, then neither is , by . This means that since, by , both sides of the equation are zero.  If is invertible, then is row equivalent to , and there exist elementary matrices such that . In the calculation that follows, we use this factorization as well as repeated application of . We first use to peel the determinant of elementary matrices away from ; we then use the same result to put those determinants back together to form . Here is the argument: . This completes the proof.   "
},
{
  "id": "examp-verify-det-product",
  "level": "2",
  "url": "sec-det-properties.html#examp-verify-det-product",
  "type": "Example",
  "number": "4.2.14",
  "title": "",
  "body": "  In this example, we will verify for a specific example. Let and be the following matrices: . We calculate as . We see that , , and , so the relationship holds.   "
},
{
  "id": "sec-det-properties-5-1",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-5-1",
  "type": "Reading Question",
  "number": "4.2.3.1",
  "title": "",
  "body": " Consider the following three matrices: .   Calculate using cofactor expansion along some row or column.     The matrix was obtained from by a single elementary row operation. Which one?     Knowing and given your answer to (b), what do you predict to be? (Consult .)     Calculate using cofactor expansion along some row or column.     The matrix was obtained from by a single elementary row operation. Which one?     Knowing and given your answer to (e), what do you predict to be? (Consult .)     Calculate using cofactor expansion along some row or column.      "
},
{
  "id": "sec-det-properties-5-2",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-5-2",
  "type": "Reading Question",
  "number": "4.2.3.2",
  "title": "",
  "body": " Verify for the following two matrices and : . (You should follow )   "
},
{
  "id": "sec-det-properties-6-1",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-1",
  "type": "Exercise",
  "number": "4.2.4.1",
  "title": "",
  "body": " Find the determinant of the matrix using row reduction.                "
},
{
  "id": "sec-det-properties-6-2",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-2",
  "type": "Exercise",
  "number": "4.2.4.2",
  "title": "",
  "body": " Find the determinant of the matrix using row reduction.                "
},
{
  "id": "sec-det-properties-6-3",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-3",
  "type": "Exercise",
  "number": "4.2.4.3",
  "title": "",
  "body": " Find the determinant using a combination of row reduction and cofactor expansion: .   "
},
{
  "id": "sec-det-properties-6-4",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-4",
  "type": "Exercise",
  "number": "4.2.4.4",
  "title": "",
  "body": " Find the determinant using a combination of row reduction and cofactor expansion: .   "
},
{
  "id": "sec-det-properties-6-5",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-5",
  "type": "Exercise",
  "number": "4.2.4.5",
  "title": "",
  "body": " Use the determinant to determine whether or not the matrix is invertible. (Note that not all fields are !)    ,       ,       ,       ,       ,       "
},
{
  "id": "sec-det-properties-6-6",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-6",
  "type": "Exercise",
  "number": "4.2.4.6",
  "title": "",
  "body": " Calculate if .   "
},
{
  "id": "sec-det-properties-6-7",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-7",
  "type": "Exercise",
  "number": "4.2.4.7",
  "title": "",
  "body": " Suppose that is a square matrix with two identical columns. Prove that .  "
},
{
  "id": "sec-det-properties-6-8",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-8",
  "type": "Exercise",
  "number": "4.2.4.8",
  "title": "",
  "body": " Suppose that is invertible. Prove that .  "
},
{
  "id": "sec-det-properties-6-9",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-9",
  "type": "Exercise",
  "number": "4.2.4.9",
  "title": "",
  "body": "    Suppose that and that . Prove that is not invertible.    Does the result or your argument in part (a) change if is replaced with ? Explain.     "
},
{
  "id": "sec-det-properties-6-10",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-10",
  "type": "Exercise",
  "number": "4.2.4.10",
  "title": "",
  "body": " Suppose that . Show that regardless of whether or not .  "
},
{
  "id": "sec-det-properties-6-11",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-11",
  "type": "Exercise",
  "number": "4.2.4.11",
  "title": "",
  "body": " Let and let . Find a formula for .  "
},
{
  "id": "sec-det-properties-6-12",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-12",
  "type": "Exercise",
  "number": "4.2.4.12",
  "title": "",
  "body": "    Verify that where , , and are .    Let and be . Show that if and only if .    Provide an example where to prove that is not always true.     "
},
{
  "id": "sec-det-properties-6-13",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-13",
  "type": "Exercise",
  "number": "4.2.4.13",
  "title": "",
  "body": " Construct an invertible matrix . For each entry of , compute the corresponding cofactor. Create a new matrix with these cofactors in the same position as the entry of on which they were based; call this matrix . Calculate . What do you observe?  "
},
{
  "id": "sec-det-properties-6-14",
  "level": "2",
  "url": "sec-det-properties.html#sec-det-properties-6-14",
  "type": "Exercise",
  "number": "4.2.4.14",
  "title": "",
  "body": " Consider the following matrix (called a Vandermond matrix): .   Use row operations to explain why .    Explain why is invertible if and only if , , and are all distinct real numbers.     "
},
{
  "id": "sec-lin-ind",
  "level": "1",
  "url": "sec-lin-ind.html",
  "type": "Section",
  "number": "5.1",
  "title": "Linear Independence",
  "body": " Linear Independence   Linear independence or, rather, its opposite is related to the idea of redundancy . If there is a linear dependence among a set of vectors, then we don't need all of those vectors to produce the same span.     Consider a set of vectors in a vector space . When , we say that is linearly dependent if, for some , , is a linear combination of the other vectors in the set. When , the set is linearly dependent if and only if .      Consider the following three vectors in : . The set is linearly dependent since .    The definition of linear dependence we have given is the intuitive one, but it is not the one most widely used. The equivalent definition of linear dependence comes through the following result.    A set of vectors in a vector space is linearly dependent if and only if there exist , not all of which are , such that .    We will first dispatch with the case . If and is linearly dependent, then . Then the equation is satisfied. Conversely, if for some , then by , , we must have , meaning is linearly dependent.  We now consider the case where . If is linearly dependent, then some vector in , call it , is a linear combination of the other vectors in . This means we have . If we subtract from both sides, we have . Since we now have written as a non-trivial linear combination of the vectors in that is, the coefficients in the linear combination are not all zero we have completed half of the proof.  We now suppose that there is a linear combination of the vectors in , , where not all of the coefficients are zero. If , then we can write . Thus we have written as a linear combination of the other vectors in , so is linearly dependent.    We will often use this statement in as our definition of linear dependence.    A set of vectors in a vector space is linearly independent if it is not linearly dependent.      In practice, we will think about linear independence this way. A set is linearly independent if the vector equation has only the trivial solution.  Further, when a set is linearly dependent, then we will call a non-trivial linear combination a linear dependence relation for the vectors in .    We will try to make the notions of linear dependence and linear independence more concrete with some examples.    Consider the set in , where . We can see that the set is linearly independent, because the only way to produce the zero polynomial from the combination is if . This is relatively easy to see in this example, since the degrees of are not at all shared between and . If the coefficient of must be zero in the sum , then we must have . And if the coefficient of must be zero in the sum , then we must have .      Consider the following vectors in : . We can show that by a familiar matrix reduction: . This shows us that . This proves that the set is linearly dependent. Further, we can conclude that the following is a linear dependence relation for the vectors in the set : .    We will see now that sets of two vectors are particularly nice when it comes to determining linear independence. (This means that there was an easier way to complete .)  Consider a set in a vector space . If is linearly dependent, then we can write or for . Conversely, if is linearly independent, then we cannot have either or . This means that we have a nice characterization of linear dependence for sets of two vectors.    A set of two vectors is linearly dependent if and only if at least one of the vectors is a multiple of the other. The set is linearly indepedent if and only if neither vector is a multiple of the other.      If and are the following vectors in , , then the set is linearly independent since neither nor is a multiple of the other.    There is one other notable fact that will allow us to determine whether particular sets of vectors are linearly dependent.    Any set of vectors that contains the zero vector is linearly dependent. This is true because a linear dependence relation is easy to construct. If is a set of vectors in a vector space , and if , then is a non-trivial linear combination of the vectors in the set which produces the zero vector.    A reader may guess that we will occasionally need to figure out whether or not a given set of vectors is linearly independent. As with questions about span, this turns out to be easier when the vector space is for some field . For other sorts of vector spaces, we will need different methods.    Let . The columns of are linearly independent if and only if is the only solution to the linear system represented by the equation . That is, the columns of are linearly independent if and only if .    Let be the columns of . Then the vector form of the equation is . If the columns of are linearly independent, then the only solution to this equation is , which means that . Alternatively, if the columns of are linearly dependent, then contains a non-zero vector namely, the scalars which provide a linear dependence relation for these vectors.      The reader may note the slight abuse of terminology in the previous proof. We referred to the columns of a matrix being linearly dependent or independent instead of the set containing the columns of the matrix. We trust that the reader will forgive and overlook this misstep since the meaning is clear and the verbal gymnastics needed to be precise at all times can prove tiresome.    This proposition provides another test of the linear dependence of a set of vectors.    If , then every set of vectors in is linearly dependent.    Let be a set of vectors in and let be the matrix with the as its columns. By (or, technically, by the version of this result generalized to any field ), we know that the linear system represented by cannot have a unique solution. Since is a known solution, this means that the columns of must be linearly dependent by .     provides us with a nice algorithm to determine whether or not a set of vectors in is linearly independent.    Suppose is a set of vectors in a vector space . In order to determine whether is linearly independent, we follow these steps.   Form the matrix and row reduce it to REF. Call this matrix .    The set is linearly independent if and only if has a pivot in every column.         Consider the following vectors in : . The set is linearly independent because the matrix has as its RREF.      We consider the following vectors in : . The set is linearly dependent, because the matrix which has the as its columns has the following RREF: .     only covers the situations when our vectors come from some . In the case of other vector spaces, we will need to do some more work.    Consider the following three elements of : . To determine whether or not the set is linearly dependent, we need to return to the definition. Suppose that we have . In other words, this linear combination is the zero polynomial, so we have . For these specific polynomials, this means we have . Since the coefficients of the corresponding powers of must be equal on both sides of this equation, we have a linear system to solve: . Our variables in this system are , , and , and we solve this using the techniques from (insert reference here). We find that . This shows that the only solution to this linear system is the trivial one: . That means that the set is linearly independent.    We end this section with two more results.    A set of vectors in is linearly independent if and only if that set spans .    Let . By , the set spans if and only if the RREF of has a pivot in every row. On the other hand, says that is linearly independent if and only if the RREF of has a pivot in every column. Since is a square matrix, each of these happen exactly when the RREF of is .    The following result appears to be little more than a slight restatement of the definition of linear dependence. However, the precise wording used in this theorem turns out to be quite useful in proving some results later in the text.   The Linear Dependence Lemma   Suppose is a linearly dependent set in a vector space and that . Then there exists such that .    Let be a linearly dependent set of vectors in a vector space , and suppose that . Then there exist scalars , not all of which are zero, such that . Let be the largest index such that . It must be that since we assumed . Then . Since , we have . This shows that and completes the proof.     It is important to record that doesn't say that in linearly dependent sets every vector is a combination of the vectors that preceed it. We merely have the existence of a vector with that property.     For each of the following, determine whether the given set of vectors in is linearly dependent or linearly independent. (You should NOT need to do any matrix row reduction to figure this out.) Refer to a fact or theorem from the section when you are giving your answer.    where       where       where       where         Determine whether the following sets in are linearly independent. Explain your answers. You should not need to do any calculations.                          For each of the following, determine by inspection (without doing any calculation) whether the given set is linearly dependent or linearly independent. Explain your answers.    in where      in where      in where      in where      in where        Determine the value(s) of , if any, that will make the set linearly independent in .                Determine the value(s) of , if any, that will make the set linearly dependent in , if .     How many pivot columns must a matrix have if its columns are linearly independent? Explain.    Determine whether the following statements are true or false. Justify your answer either way.   If is a subset of a vector space and is not a scalar multiple of , then is linearly independent.    If is a subset of a vector space and is not a linear combination of , , and , then is linearly independent.    If is a subset of a vector space and both and are linearly independent, then is linearly independent.    If is a subset of a vector space and is linearly independent, then is also linearly independent.       Let be a linear transformation between vector spaces.   Prove that if is a linearly dependent set in , then is a linearly dependent set in .    Prove that if is injective and if is a linearly dependent set in , then is a linearly dependent set in .       Determine whether or not the following set of vectors is linearly independent in the given vector space.    in if      in if      in if        Suppose that and are subsets of a vector space . Prove that if and is linearly dependent, then is linearly dependent.    Let and let be a linear transformation.   Prove that if if and only if .    Prove that is injective if and only if it is surjective.       Let be a vector space over and let be a subset of . Prove that is linearly dependent if and only if there exist integers  , not all of which are zero, such that .    For each of the following subsets of , determine whether the set is linearly dependent or linearly independent. Explain your answers.    , ,      , ,        Let and suppose that . Prove that the set of vectors that spans is linearly independent.    "
},
{
  "id": "def-lin-dep",
  "level": "2",
  "url": "sec-lin-ind.html#def-lin-dep",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Consider a set of vectors in a vector space . When , we say that is linearly dependent if, for some , , is a linear combination of the other vectors in the set. When , the set is linearly dependent if and only if .   "
},
{
  "id": "sec-lin-ind-4",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-4",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  Consider the following three vectors in : . The set is linearly dependent since .   "
},
{
  "id": "prop-defn-lin-dep",
  "level": "2",
  "url": "sec-lin-ind.html#prop-defn-lin-dep",
  "type": "Proposition",
  "number": "5.1.3",
  "title": "",
  "body": "  A set of vectors in a vector space is linearly dependent if and only if there exist , not all of which are , such that .    We will first dispatch with the case . If and is linearly dependent, then . Then the equation is satisfied. Conversely, if for some , then by , , we must have , meaning is linearly dependent.  We now consider the case where . If is linearly dependent, then some vector in , call it , is a linear combination of the other vectors in . This means we have . If we subtract from both sides, we have . Since we now have written as a non-trivial linear combination of the vectors in that is, the coefficients in the linear combination are not all zero we have completed half of the proof.  We now suppose that there is a linear combination of the vectors in , , where not all of the coefficients are zero. If , then we can write . Thus we have written as a linear combination of the other vectors in , so is linearly dependent.   "
},
{
  "id": "def-lin-ind",
  "level": "2",
  "url": "sec-lin-ind.html#def-lin-ind",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": "  A set of vectors in a vector space is linearly independent if it is not linearly dependent.   "
},
{
  "id": "sec-lin-ind-9",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-9",
  "type": "Note",
  "number": "5.1.5",
  "title": "",
  "body": "  In practice, we will think about linear independence this way. A set is linearly independent if the vector equation has only the trivial solution.  Further, when a set is linearly dependent, then we will call a non-trivial linear combination a linear dependence relation for the vectors in .   "
},
{
  "id": "examp-polys-lin-ind",
  "level": "2",
  "url": "sec-lin-ind.html#examp-polys-lin-ind",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  Consider the set in , where . We can see that the set is linearly independent, because the only way to produce the zero polynomial from the combination is if . This is relatively easy to see in this example, since the degrees of are not at all shared between and . If the coefficient of must be zero in the sum , then we must have . And if the coefficient of must be zero in the sum , then we must have .   "
},
{
  "id": "sec-lin-ind-12",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-12",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "  Consider the following vectors in : . We can show that by a familiar matrix reduction: . This shows us that . This proves that the set is linearly dependent. Further, we can conclude that the following is a linear dependence relation for the vectors in the set : .   "
},
{
  "id": "fact-lin-ind-two-vectors",
  "level": "2",
  "url": "sec-lin-ind.html#fact-lin-ind-two-vectors",
  "type": "Fact",
  "number": "5.1.8",
  "title": "",
  "body": "  A set of two vectors is linearly dependent if and only if at least one of the vectors is a multiple of the other. The set is linearly indepedent if and only if neither vector is a multiple of the other.   "
},
{
  "id": "sec-lin-ind-16",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-16",
  "type": "Example",
  "number": "5.1.9",
  "title": "",
  "body": "  If and are the following vectors in , , then the set is linearly independent since neither nor is a multiple of the other.   "
},
{
  "id": "fact-lin-dep-zero",
  "level": "2",
  "url": "sec-lin-ind.html#fact-lin-dep-zero",
  "type": "Fact",
  "number": "5.1.10",
  "title": "",
  "body": "  Any set of vectors that contains the zero vector is linearly dependent. This is true because a linear dependence relation is easy to construct. If is a set of vectors in a vector space , and if , then is a non-trivial linear combination of the vectors in the set which produces the zero vector.   "
},
{
  "id": "prop-lin-ind-columns",
  "level": "2",
  "url": "sec-lin-ind.html#prop-lin-ind-columns",
  "type": "Proposition",
  "number": "5.1.11",
  "title": "",
  "body": "  Let . The columns of are linearly independent if and only if is the only solution to the linear system represented by the equation . That is, the columns of are linearly independent if and only if .    Let be the columns of . Then the vector form of the equation is . If the columns of are linearly independent, then the only solution to this equation is , which means that . Alternatively, if the columns of are linearly dependent, then contains a non-zero vector namely, the scalars which provide a linear dependence relation for these vectors.   "
},
{
  "id": "sec-lin-ind-21",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-21",
  "type": "Note",
  "number": "5.1.12",
  "title": "",
  "body": "  The reader may note the slight abuse of terminology in the previous proof. We referred to the columns of a matrix being linearly dependent or independent instead of the set containing the columns of the matrix. We trust that the reader will forgive and overlook this misstep since the meaning is clear and the verbal gymnastics needed to be precise at all times can prove tiresome.   "
},
{
  "id": "cor-n-vectors-f-m",
  "level": "2",
  "url": "sec-lin-ind.html#cor-n-vectors-f-m",
  "type": "Corollary",
  "number": "5.1.13",
  "title": "",
  "body": "  If , then every set of vectors in is linearly dependent.    Let be a set of vectors in and let be the matrix with the as its columns. By (or, technically, by the version of this result generalized to any field ), we know that the linear system represented by cannot have a unique solution. Since is a known solution, this means that the columns of must be linearly dependent by .   "
},
{
  "id": "alg-linear-independence",
  "level": "2",
  "url": "sec-lin-ind.html#alg-linear-independence",
  "type": "Algorithm",
  "number": "5.1.14",
  "title": "",
  "body": "  Suppose is a set of vectors in a vector space . In order to determine whether is linearly independent, we follow these steps.   Form the matrix and row reduce it to REF. Call this matrix .    The set is linearly independent if and only if has a pivot in every column.      "
},
{
  "id": "sec-lin-ind-26",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-26",
  "type": "Example",
  "number": "5.1.15",
  "title": "",
  "body": "  Consider the following vectors in : . The set is linearly independent because the matrix has as its RREF.   "
},
{
  "id": "sec-lin-ind-27",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-27",
  "type": "Example",
  "number": "5.1.16",
  "title": "",
  "body": "  We consider the following vectors in : . The set is linearly dependent, because the matrix which has the as its columns has the following RREF: .   "
},
{
  "id": "sec-lin-ind-29",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-29",
  "type": "Example",
  "number": "5.1.17",
  "title": "",
  "body": "  Consider the following three elements of : . To determine whether or not the set is linearly dependent, we need to return to the definition. Suppose that we have . In other words, this linear combination is the zero polynomial, so we have . For these specific polynomials, this means we have . Since the coefficients of the corresponding powers of must be equal on both sides of this equation, we have a linear system to solve: . Our variables in this system are , , and , and we solve this using the techniques from (insert reference here). We find that . This shows that the only solution to this linear system is the trivial one: . That means that the set is linearly independent.   "
},
{
  "id": "cor-n-vect-in-f-n",
  "level": "2",
  "url": "sec-lin-ind.html#cor-n-vect-in-f-n",
  "type": "Corollary",
  "number": "5.1.18",
  "title": "",
  "body": "  A set of vectors in is linearly independent if and only if that set spans .    Let . By , the set spans if and only if the RREF of has a pivot in every row. On the other hand, says that is linearly independent if and only if the RREF of has a pivot in every column. Since is a square matrix, each of these happen exactly when the RREF of is .   "
},
{
  "id": "thm-lin-dep-lemma",
  "level": "2",
  "url": "sec-lin-ind.html#thm-lin-dep-lemma",
  "type": "Theorem",
  "number": "5.1.19",
  "title": "The Linear Dependence Lemma.",
  "body": " The Linear Dependence Lemma   Suppose is a linearly dependent set in a vector space and that . Then there exists such that .    Let be a linearly dependent set of vectors in a vector space , and suppose that . Then there exist scalars , not all of which are zero, such that . Let be the largest index such that . It must be that since we assumed . Then . Since , we have . This shows that and completes the proof.   "
},
{
  "id": "sec-lin-ind-34",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-34",
  "type": "Note",
  "number": "5.1.20",
  "title": "",
  "body": " It is important to record that doesn't say that in linearly dependent sets every vector is a combination of the vectors that preceed it. We merely have the existence of a vector with that property.  "
},
{
  "id": "sec-lin-ind-35-1",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-35-1",
  "type": "Reading Question",
  "number": "5.1.1",
  "title": "",
  "body": " For each of the following, determine whether the given set of vectors in is linearly dependent or linearly independent. (You should NOT need to do any matrix row reduction to figure this out.) Refer to a fact or theorem from the section when you are giving your answer.    where       where       where       where       "
},
{
  "id": "sec-lin-ind-35-2",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-35-2",
  "type": "Reading Question",
  "number": "5.1.2",
  "title": "",
  "body": " Determine whether the following sets in are linearly independent. Explain your answers. You should not need to do any calculations.                      "
},
{
  "id": "sec-lin-ind-36-1",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-1",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": " For each of the following, determine by inspection (without doing any calculation) whether the given set is linearly dependent or linearly independent. Explain your answers.    in where      in where      in where      in where      in where      "
},
{
  "id": "sec-lin-ind-36-2",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-2",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": " Determine the value(s) of , if any, that will make the set linearly independent in .              "
},
{
  "id": "sec-lin-ind-36-3",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-3",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": " Determine the value(s) of , if any, that will make the set linearly dependent in , if .   "
},
{
  "id": "sec-lin-ind-36-4",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-4",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": " How many pivot columns must a matrix have if its columns are linearly independent? Explain.  "
},
{
  "id": "sec-lin-ind-36-5",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-5",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": " Determine whether the following statements are true or false. Justify your answer either way.   If is a subset of a vector space and is not a scalar multiple of , then is linearly independent.    If is a subset of a vector space and is not a linear combination of , , and , then is linearly independent.    If is a subset of a vector space and both and are linearly independent, then is linearly independent.    If is a subset of a vector space and is linearly independent, then is also linearly independent.     "
},
{
  "id": "sec-lin-ind-36-6",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-6",
  "type": "Exercise",
  "number": "5.1.6",
  "title": "",
  "body": " Let be a linear transformation between vector spaces.   Prove that if is a linearly dependent set in , then is a linearly dependent set in .    Prove that if is injective and if is a linearly dependent set in , then is a linearly dependent set in .     "
},
{
  "id": "sec-lin-ind-36-7",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-7",
  "type": "Exercise",
  "number": "5.1.7",
  "title": "",
  "body": " Determine whether or not the following set of vectors is linearly independent in the given vector space.    in if      in if      in if      "
},
{
  "id": "sec-lin-ind-36-8",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-8",
  "type": "Exercise",
  "number": "5.1.8",
  "title": "",
  "body": " Suppose that and are subsets of a vector space . Prove that if and is linearly dependent, then is linearly dependent.  "
},
{
  "id": "sec-lin-ind-36-9",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-9",
  "type": "Exercise",
  "number": "5.1.9",
  "title": "",
  "body": " Let and let be a linear transformation.   Prove that if if and only if .    Prove that is injective if and only if it is surjective.     "
},
{
  "id": "sec-lin-ind-36-10",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-10",
  "type": "Exercise",
  "number": "5.1.10",
  "title": "",
  "body": " Let be a vector space over and let be a subset of . Prove that is linearly dependent if and only if there exist integers  , not all of which are zero, such that .  "
},
{
  "id": "sec-lin-ind-36-11",
  "level": "2",
  "url": "sec-lin-ind.html#sec-lin-ind-36-11",
  "type": "Exercise",
  "number": "5.1.11",
  "title": "",
  "body": " For each of the following subsets of , determine whether the set is linearly dependent or linearly independent. Explain your answers.    , ,      , ,      "
},
{
  "id": "exer-null-lin-ind",
  "level": "2",
  "url": "sec-lin-ind.html#exer-null-lin-ind",
  "type": "Exercise",
  "number": "5.1.12",
  "title": "",
  "body": " Let and suppose that . Prove that the set of vectors that spans is linearly independent.  "
},
{
  "id": "sec-basis",
  "level": "1",
  "url": "sec-basis.html",
  "type": "Section",
  "number": "5.2",
  "title": "Basis of a Vector Space",
  "body": " Basis of a Vector Space   We have previously examined when a set of vectors spans a vector space. In this section, we will learn how to work with the most efficient spanning set possible.    The Definition of a Basis  We begin with the notion of finite- and infinite-dimensional vector spaces.    A vector space is finite-dimensional if there is a finite set of vectors which spans . A vector space is infinite-dimensional if it is not finite-dimensional.    We recall that linear independence in was introduced as a way to eliminate redundancy. We pick up on this idea in the next definition.    Let be a finite-dimensional vector space. Then a set is a basis for if is linearly independent and if .     The notion of a basis exists for infinite-dimensional vector spaces, but since the overwhelming majority of our work will be with finite-dimensional spaces, we have only given the definition in that setting.     We recall that is the vector in with a in the th coordinate and zeros elsewhere. Then the set is a basis for . If we form the matrix with these vectors as columns, we see that it is the identity matrix. Since there is a pivot in every column, is linearly independent according to . Then tells us that also spans . This proves that is a basis for .  We call this basis the standard basis for .      We now consider the set within the vector space . Since any vector in can be written as , it is clear that spans . It is also true that is linearly independent: the set is linearly independent since neither vector is a scalar multiple of the other. And then since is not a linear combination of and , we conclude that is linearly independent by (the contrapositive of) the Linear Dependence Lemma ( ). This proves that is a basis for .  The analogous basis for , , is often called the standard basis for .      Consider the following matrix : . We will find a basis for .  Following the procedure we first encountered in , we start by finding the RREF of : . We see that and are free variables, and that any vector in can be written as . If we label the vectors , then we can see that . Further, we see that is linearly independent (neither vector is a scalar multiple of the other), so is a basis for .     What we observed in is true more generally. Since the method we use to find a spanning set for always produces a linearly independent set (see ), this method will always produce a basis for .   Putting some facts together, there is a fairly straightforward condition for when a list of vectors in is a basis for that space.    The set is a basis for if and only if the RREF of the matrix is .    From we know that the set spans if and only if the RREF of has a pivot in every row. Additionally, tells us that is linearly independent if and only if the RREF of has a pivot in each column. The only way a matrix in RREF can have a pivot in every row and every column is if that RREF is the identity matrix.      It turns out that it is fairly easy to tell whether a set of two vectors in forms a basis for . Since linear independence is easy to check with two vectors is either vector a scalar multiple of the other? by we can focus on this characteristic. This means that the set , where is a basis for . Neither vector is a scalar multiple of the other, so the set is linearly independent. And then tells us that this set must also span . (We could also easily see this by row reducing the matrix .)  On the other hand, the set , where is not a basis for . Since , this set is not linearly independent, so it cannot be a basis.      The Properties of a Basis  Having a basis is a powerful tool. In particular, it guarantees a uniqueness that is quite useful.   The Unique Representation Theorem   A set of vectors in a vector space is a basis for if and only if each element of can be uniquely represented as a linear combination of the vectors in .    Suppose that is a basis of . Since , every vector in can be written as a linear combination of the vectors in . Let be a vector in , and suppose that can be written as a linear combination of the vectors in in two ways: . We want to show that for each , . Since both of these representations are equal to , they are equal to each other, so we have . Since is a linearly independent set (since we are assuming it is a basis), it must be that for each . Therefore, and the representation of is unique.  For the other direction, we suppose that every element of can be uniquely represented as a linear combination of the vectors in . Since every element of can be represented as a linear combination of the vectors in , we see that spans . Since every element in can be represented uniquely as a linear combination of the vectors in , and since can be represented as the trivial linear combination of the vectors in , this means that is linearly independent. (The trivial linear combination of vectors in is the only way to obtain as a linear combination of the vectors in .) Since is linearly independent and spans , this proves that is a basis for .    This next result shows us how to trim a spanning set down until we reach a basis.   The Spanning Set Theorem   Suppose that is a nonzero vector space and that for some set of vectors .   If is linearly dependent and a vector can be written as a linear combination of the rest of the vectors in , then .    A subset of is a basis for .       We suppose that . If is linearly dependent, then by the Linear Dependence Lemma, there exists a vector such that can be written as a linear combination of the vectors . We suppose this combination is . Now suppose is a vector in . We have . Using , we can substitute this expression in for in and, once the algebraic dust settles, we will have written as a combination of the vectors in . This shows that .  If is linearly independent, then it is already a basis for . If it is linearly dependent, then we can remove a vector according to the above procedure to obtain a set which still spans . As long as there are two or more vectors in the spanning set, we can repeat this process until we are left with a linearly independent set and thus a basis. If the spanning set is eventually reduced to a single vector, that vector will be nonzero since is nonzero, and therefore that set will be linearly independent.      Every finite-dimensional vector space has a basis.    Since a finite-dimensional vector space by definition has a finite spanning set , tells us that a subset of will be a basis for the vector space.    While the proof of provides a way to trim a spanning set down to a basis, it does not offer a practical method for this process. The following algorithm provides that practical method for certain vector spaces.    Let be a set of vectors in . To find a basis for , do the following.   Put the matrix in RREF.    If column in the RREF contains a pivot, then include in .       We form the matrix . If is already in RREF, then the non-pivot columns are linear combinations of the pivot columns that preceed them. So, those can be discarded and the pivot columns will be a basis, according to .  We will complete the proof with a reminder about the effect of elementary row operations on the columns of a matrix. If a column of is a linear combination of the columns that preceed it, then for some scalars . This means that the column vector is a solution to the linear system represented by the augmented matrix . One of the earliest facts we learned about elementary row operations is that they preserve the solution sets of linear systems, so the same vector will be a solution to the linear system represented by the RREF of . This proves that the relationships between the columns of a matrix are the same as the relationships between the columns of the RREF of that matrix.  So, if is not in RREF, we can find the RREF of , call it . The non-pivot columns of indicate that the corresponding columns of should not be included in the basis. In other words the pivot columns of indicate that the corresponding columns of are the ones that should remain to form the basis.     We emphasize here that the pivot columns in the reduced matrix do not provide the vectors for the basis! The pivot columns merely provide the instructions for which of the original vectors should be kept to form the basis.     Consider the following matrix : . We will find a basis for using . When we put into RREF, we find . The pivots are in columns 1, 3, and 5, so a basis for is , where .    We arrive at the end of this section with two helpful perspectives on a basis. A basis can be formed by trimming a spanning set down until it is linearly independent. Thus, a basis is a spanning set that is as small as possible. On the other hand, a linearly independent set can always be enlarged until it spans. Therefore, a basis is also a linearly independent set that is as large as possible.     Consider the set in where . Find a basis for . Follow .     Determine whether or not the set forms a basis for , where . Explain your answer.       For each of the following, determine whether the given set of vectors forms a basis for the indicated vector space.    in if      in if      in if        For each of the following, determine whether the given set of vectors forms a basis for the indicated vector space.    in if      in if      in if        For each matrix , find a basis for and .    ,      ,        Produce a matrix which has two vectors in a basis for and two vectors in a basis for .    Find a basis for , if .    Find a basis for , if .    Let be the vector space of all functions . Find a basis for the subspace , if .    Let be a linear transformation between vector spaces, and let be a basis for .   Produce an example to show that does not need to be a basis of .    Suppose that is injective. Must be a basis for ? If so, prove it. If not, produce a counter-example.       Find a matrix such that . Is unique? Explain.     Suppose that is a linear transformation which satisfies the following: . Calculate .    Suppose that is a basis for a vector space . Prove that is also a basis for .    Find a subset of the following set which is a basis for : .    "
},
{
  "id": "def-finite-dimensional",
  "level": "2",
  "url": "sec-basis.html#def-finite-dimensional",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  A vector space is finite-dimensional if there is a finite set of vectors which spans . A vector space is infinite-dimensional if it is not finite-dimensional.   "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-basis.html#def-basis",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "  Let be a finite-dimensional vector space. Then a set is a basis for if is linearly independent and if .   "
},
{
  "id": "subsec-intro-basis-6",
  "level": "2",
  "url": "sec-basis.html#subsec-intro-basis-6",
  "type": "Note",
  "number": "5.2.3",
  "title": "",
  "body": " The notion of a basis exists for infinite-dimensional vector spaces, but since the overwhelming majority of our work will be with finite-dimensional spaces, we have only given the definition in that setting.  "
},
{
  "id": "subsec-intro-basis-7",
  "level": "2",
  "url": "sec-basis.html#subsec-intro-basis-7",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": "  We recall that is the vector in with a in the th coordinate and zeros elsewhere. Then the set is a basis for . If we form the matrix with these vectors as columns, we see that it is the identity matrix. Since there is a pivot in every column, is linearly independent according to . Then tells us that also spans . This proves that is a basis for .  We call this basis the standard basis for .   "
},
{
  "id": "subsec-intro-basis-8",
  "level": "2",
  "url": "sec-basis.html#subsec-intro-basis-8",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": "  We now consider the set within the vector space . Since any vector in can be written as , it is clear that spans . It is also true that is linearly independent: the set is linearly independent since neither vector is a scalar multiple of the other. And then since is not a linear combination of and , we conclude that is linearly independent by (the contrapositive of) the Linear Dependence Lemma ( ). This proves that is a basis for .  The analogous basis for , , is often called the standard basis for .   "
},
{
  "id": "examp-basis-null-space",
  "level": "2",
  "url": "sec-basis.html#examp-basis-null-space",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": "  Consider the following matrix : . We will find a basis for .  Following the procedure we first encountered in , we start by finding the RREF of : . We see that and are free variables, and that any vector in can be written as . If we label the vectors , then we can see that . Further, we see that is linearly independent (neither vector is a scalar multiple of the other), so is a basis for .   "
},
{
  "id": "subsec-intro-basis-10",
  "level": "2",
  "url": "sec-basis.html#subsec-intro-basis-10",
  "type": "Note",
  "number": "5.2.7",
  "title": "",
  "body": " What we observed in is true more generally. Since the method we use to find a spanning set for always produces a linearly independent set (see ), this method will always produce a basis for .  "
},
{
  "id": "prop-basis-of-fn",
  "level": "2",
  "url": "sec-basis.html#prop-basis-of-fn",
  "type": "Proposition",
  "number": "5.2.8",
  "title": "",
  "body": "  The set is a basis for if and only if the RREF of the matrix is .    From we know that the set spans if and only if the RREF of has a pivot in every row. Additionally, tells us that is linearly independent if and only if the RREF of has a pivot in each column. The only way a matrix in RREF can have a pivot in every row and every column is if that RREF is the identity matrix.   "
},
{
  "id": "subsec-intro-basis-13",
  "level": "2",
  "url": "sec-basis.html#subsec-intro-basis-13",
  "type": "Example",
  "number": "5.2.9",
  "title": "",
  "body": "  It turns out that it is fairly easy to tell whether a set of two vectors in forms a basis for . Since linear independence is easy to check with two vectors is either vector a scalar multiple of the other? by we can focus on this characteristic. This means that the set , where is a basis for . Neither vector is a scalar multiple of the other, so the set is linearly independent. And then tells us that this set must also span . (We could also easily see this by row reducing the matrix .)  On the other hand, the set , where is not a basis for . Since , this set is not linearly independent, so it cannot be a basis.   "
},
{
  "id": "thm-unique-rep",
  "level": "2",
  "url": "sec-basis.html#thm-unique-rep",
  "type": "Theorem",
  "number": "5.2.10",
  "title": "The Unique Representation Theorem.",
  "body": " The Unique Representation Theorem   A set of vectors in a vector space is a basis for if and only if each element of can be uniquely represented as a linear combination of the vectors in .    Suppose that is a basis of . Since , every vector in can be written as a linear combination of the vectors in . Let be a vector in , and suppose that can be written as a linear combination of the vectors in in two ways: . We want to show that for each , . Since both of these representations are equal to , they are equal to each other, so we have . Since is a linearly independent set (since we are assuming it is a basis), it must be that for each . Therefore, and the representation of is unique.  For the other direction, we suppose that every element of can be uniquely represented as a linear combination of the vectors in . Since every element of can be represented as a linear combination of the vectors in , we see that spans . Since every element in can be represented uniquely as a linear combination of the vectors in , and since can be represented as the trivial linear combination of the vectors in , this means that is linearly independent. (The trivial linear combination of vectors in is the only way to obtain as a linear combination of the vectors in .) Since is linearly independent and spans , this proves that is a basis for .   "
},
{
  "id": "thm-spanning-set",
  "level": "2",
  "url": "sec-basis.html#thm-spanning-set",
  "type": "Theorem",
  "number": "5.2.11",
  "title": "The Spanning Set Theorem.",
  "body": " The Spanning Set Theorem   Suppose that is a nonzero vector space and that for some set of vectors .   If is linearly dependent and a vector can be written as a linear combination of the rest of the vectors in , then .    A subset of is a basis for .       We suppose that . If is linearly dependent, then by the Linear Dependence Lemma, there exists a vector such that can be written as a linear combination of the vectors . We suppose this combination is . Now suppose is a vector in . We have . Using , we can substitute this expression in for in and, once the algebraic dust settles, we will have written as a combination of the vectors in . This shows that .  If is linearly independent, then it is already a basis for . If it is linearly dependent, then we can remove a vector according to the above procedure to obtain a set which still spans . As long as there are two or more vectors in the spanning set, we can repeat this process until we are left with a linearly independent set and thus a basis. If the spanning set is eventually reduced to a single vector, that vector will be nonzero since is nonzero, and therefore that set will be linearly independent.   "
},
{
  "id": "cor-basis-fin-dim",
  "level": "2",
  "url": "sec-basis.html#cor-basis-fin-dim",
  "type": "Corollary",
  "number": "5.2.12",
  "title": "",
  "body": "  Every finite-dimensional vector space has a basis.    Since a finite-dimensional vector space by definition has a finite spanning set , tells us that a subset of will be a basis for the vector space.   "
},
{
  "id": "alg-find-basis",
  "level": "2",
  "url": "sec-basis.html#alg-find-basis",
  "type": "Algorithm",
  "number": "5.2.13",
  "title": "",
  "body": "  Let be a set of vectors in . To find a basis for , do the following.   Put the matrix in RREF.    If column in the RREF contains a pivot, then include in .       We form the matrix . If is already in RREF, then the non-pivot columns are linear combinations of the pivot columns that preceed them. So, those can be discarded and the pivot columns will be a basis, according to .  We will complete the proof with a reminder about the effect of elementary row operations on the columns of a matrix. If a column of is a linear combination of the columns that preceed it, then for some scalars . This means that the column vector is a solution to the linear system represented by the augmented matrix . One of the earliest facts we learned about elementary row operations is that they preserve the solution sets of linear systems, so the same vector will be a solution to the linear system represented by the RREF of . This proves that the relationships between the columns of a matrix are the same as the relationships between the columns of the RREF of that matrix.  So, if is not in RREF, we can find the RREF of , call it . The non-pivot columns of indicate that the corresponding columns of should not be included in the basis. In other words the pivot columns of indicate that the corresponding columns of are the ones that should remain to form the basis.   "
},
{
  "id": "subsec-basis-props-9",
  "level": "2",
  "url": "sec-basis.html#subsec-basis-props-9",
  "type": "Note",
  "number": "5.2.14",
  "title": "",
  "body": " We emphasize here that the pivot columns in the reduced matrix do not provide the vectors for the basis! The pivot columns merely provide the instructions for which of the original vectors should be kept to form the basis.  "
},
{
  "id": "examp-colA-basis",
  "level": "2",
  "url": "sec-basis.html#examp-colA-basis",
  "type": "Example",
  "number": "5.2.15",
  "title": "",
  "body": "  Consider the following matrix : . We will find a basis for using . When we put into RREF, we find . The pivots are in columns 1, 3, and 5, so a basis for is , where .   "
},
{
  "id": "sec-basis-5-1",
  "level": "2",
  "url": "sec-basis.html#sec-basis-5-1",
  "type": "Reading Question",
  "number": "5.2.3.1",
  "title": "",
  "body": " Consider the set in where . Find a basis for . Follow .   "
},
{
  "id": "sec-basis-5-2",
  "level": "2",
  "url": "sec-basis.html#sec-basis-5-2",
  "type": "Reading Question",
  "number": "5.2.3.2",
  "title": "",
  "body": " Determine whether or not the set forms a basis for , where . Explain your answer.   "
},
{
  "id": "sec-basis-6-1",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-1",
  "type": "Exercise",
  "number": "5.2.4.1",
  "title": "",
  "body": " For each of the following, determine whether the given set of vectors forms a basis for the indicated vector space.    in if      in if      in if      "
},
{
  "id": "sec-basis-6-2",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-2",
  "type": "Exercise",
  "number": "5.2.4.2",
  "title": "",
  "body": " For each of the following, determine whether the given set of vectors forms a basis for the indicated vector space.    in if      in if      in if      "
},
{
  "id": "sec-basis-6-3",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-3",
  "type": "Exercise",
  "number": "5.2.4.3",
  "title": "",
  "body": " For each matrix , find a basis for and .    ,      ,      "
},
{
  "id": "sec-basis-6-4",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-4",
  "type": "Exercise",
  "number": "5.2.4.4",
  "title": "",
  "body": " Produce a matrix which has two vectors in a basis for and two vectors in a basis for .  "
},
{
  "id": "sec-basis-6-5",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-5",
  "type": "Exercise",
  "number": "5.2.4.5",
  "title": "",
  "body": " Find a basis for , if .  "
},
{
  "id": "sec-basis-6-6",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-6",
  "type": "Exercise",
  "number": "5.2.4.6",
  "title": "",
  "body": " Find a basis for , if .  "
},
{
  "id": "sec-basis-6-7",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-7",
  "type": "Exercise",
  "number": "5.2.4.7",
  "title": "",
  "body": " Let be the vector space of all functions . Find a basis for the subspace , if .  "
},
{
  "id": "sec-basis-6-8",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-8",
  "type": "Exercise",
  "number": "5.2.4.8",
  "title": "",
  "body": " Let be a linear transformation between vector spaces, and let be a basis for .   Produce an example to show that does not need to be a basis of .    Suppose that is injective. Must be a basis for ? If so, prove it. If not, produce a counter-example.     "
},
{
  "id": "sec-basis-6-9",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-9",
  "type": "Exercise",
  "number": "5.2.4.9",
  "title": "",
  "body": " Find a matrix such that . Is unique? Explain.   "
},
{
  "id": "sec-basis-6-10",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-10",
  "type": "Exercise",
  "number": "5.2.4.10",
  "title": "",
  "body": " Suppose that is a linear transformation which satisfies the following: . Calculate .  "
},
{
  "id": "sec-basis-6-11",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-11",
  "type": "Exercise",
  "number": "5.2.4.11",
  "title": "",
  "body": " Suppose that is a basis for a vector space . Prove that is also a basis for .  "
},
{
  "id": "sec-basis-6-12",
  "level": "2",
  "url": "sec-basis.html#sec-basis-6-12",
  "type": "Exercise",
  "number": "5.2.4.12",
  "title": "",
  "body": " Find a subset of the following set which is a basis for : .  "
},
{
  "id": "sec-dimension",
  "level": "1",
  "url": "sec-dimension.html",
  "type": "Section",
  "number": "5.3",
  "title": "Dimension",
  "body": " Dimension   In this section we will define the dimension of a vector space, finally delivering on the promise made in the introduction to this chapter to describe an intrinsic quality of vector spaces that allows a comparison between spaces.    The Dimension of a Vector Space  We begin with a lemma that relates span and linear independence and the number of vectors in sets with these properties. We will omit the proof.    Suppose that is a vector space and that . If is a linearly independent subset of , then .     We will now use this lemma to prove a result related to dimension.    Suppose that, for every , a vector space contains a linearly independent subset of size . Then is infinite-dimensional.    We will prove the contrapositive. If is finite-dimensional, then there exists a set such that . By , for any , cannot contain a linearly independent set of vectors. This completes the proof of the contrapositive.    This theorem gives us an introduction to our first infinite-dimensional example.    Let be the vector space of all polynomials with real coefficients. (We do not restrict the degree of polynomials in .) For any , contains the linearly independent set . Therefore, is infinite-dimensional.    We now come to the bedrock result of this section, the result that makes the definition of dimension possible.    Suppose that and are both bases for a vector space . Then .    Since and is a linearly independent set, implies that . However, since and is a linearly independent set, also implies that . Therefore, .    Even though a vector space may have a huge number of bases, all of those bases have the same size. This is a number intrinsic to the vector space, not to any specific basis of that vector space. This is what we mean by the dimension of a vector space.    Let be a finite-dimensional vector space. If , then the dimension of , written , is the size of any basis of . If , we say that is -dimensional .  If , then we define the dimension of to be 0.    Two of the families of vector spaces we frequently discuss have easy-to-determine dimensions, as the next two examples illustrate.    Since is a basis for , then .      Since is a basis for , then .    The proof of the next two results are a consequence of and will appear in the exercises.    The dimension of any vector space is less than or equal to the size of any spanning set.      If a vector space is finite-dimensional and is a linearly independent set in , then .    When we view dimension as an intrinsic quality of a vector space that allows comparison between spaces, we find something surprising about vector spaces with the same dimension. They are essentially the same! (Note: the reader should read before going further as some of the ideas, notation, and results used in this proof are found there.)    Let and be finite-dimensional vector spaces over . Then if and only if and are isomorphic.    Suppose that . Let be a basis for and let be a basis for . By , we can find such that for each , . Then by , is an isomorphism.  To prove the claim in the other direction, suppose that is an isomorphism. If is a basis for , then is a basis for by . Thus .    Here is an immediate consequence of this result.    If is a finite-dimensional vector space over and , then is isomorphic to .      Since is a three-dimensional vector space over , and are isomorphic.       Dimension and Subspaces  If we know the dimension of a vector space, then we sometimes have a quicker path to finding a basis for that space. This next result says that if we have a spanning set of the same size as a basis, then it must be a basis.    Suppose that is a vector space with . If is such that , then is a basis for .    By The Spanning Set Theorem ( ), we know that a subset of will be a basis for . But since , the size of must be . Therefore, and is a basis for .     What is true in for a spanning set is also true for a linearly independent set. To prove that, however, we first need the analog to The Spanning Set Theorem for linearly independent sets.    Suppose that is a finite-dimensional vector space and that is a linearly independent set of vectors in . Then there is a basis of which contains .    Let be a linearly independent set of vectors in . If , then is a basis and we are done. If , then there exists some vector . By the Linear Dependence Lemma ( ), the set is linearly independent.  We can repeat this process. If , we are done; otherwise, we create in the same fashion that we created . We can continue doing this, adding one vector at a time to this set and maintaining linear independence. Eventually we must reach the point where , since otherwise would imply that is infinite-dimensional.    We now have the machinery necessary to prove the following theorem. The proof will appear in the exercises.    Suppose that is a vector space with and that is a linearly independent subset of of size . Then is a basis for .    The final result of this section collects some facts about dimension and subspaces which we will use in some of the sections that follow.    Suppose that is a finite-dimensional vector space and that is a subspace of . Then the following hold.   The subspace is finite-dimensional.    We have .    We have if and only if .       We will prove these facts in order. If the subspace is , then we have nothing to prove. If not, then there is some non-zero vector . If , we are done; if not, then there exists . By , the set is linearly independent. We can continue to repeat this process. At each stage we have a linearly independent set , and this cannot continue indefinitely since is a subspace of , which is finite-dimensional. Thus this process must eventually stop when for some , and that proves that is finite dimensional.  The space is finite dimensional, so it has a basis . This is a linearly independent set of vectors in , so says that can be extended to a basis of . This means that will have at least as many vectors in it as , so .  If it is obvious that , so we only need to prove the claim in the other direction. We will prove the contrapositive, so we assume . Let be a basis for . Since , there exists a vector . By the set is linearly independent in , implying that . Therefore .      We can apply this latest result to the vector space . The familiar subspaces of are all of the subspaces of .   The only subspace of dimension 0 in is the zero subspace .    One-dimensional subspaces of are lines through the origin. These can all be written as the span of a single (non-zero) vector.    Two-dimensional subspaces of are planes through the origin. These are all spanned by sets of two linearly independent vectors.    The only three-dimensional subspace of is itself.          Consider the following vectors in : . By inspection, why is the set a basis for ?     Let , , , and be vectors in .   The set is not a basis for , and there's a very short argument why. What is that argument?     Must there be a subset of which is a basis of ? Why or why not?          Find the dimension of the subspace of consisting of all vectors whose first and third coordinates are equal.    For each of the following sets of vectors in the given vector space, find the dimension of the subspace spanned by that set of vectors.    in if      in if        For each of the following matrices , determine the dimensions of and .    ,      ,        Let be a matrix.   Prove that is the number of non-pivot columns in .    Prove that is the number of pivot columns of .       Determine whether the following statements are true or false. Justify your answer either way.   If a set spans a finite-dimensional space , and if is a set of more than vectors in , then is linearly dependent.    The vector space is a subspace of .    A vector space is infinite-dimensional if it is spanned by an infinite set.       Determine whether the following statements are true or false. Justify your answer either way.   If , then there exists a spanning set of vectors in .    If every set of vectors in fails to span , then .    If and , then every set of non-zero vectors in is linearly independent.       The first four Hermite polynomials are , , , and . Show that the set of these polynomials is a basis for .    The first four Laguerre polynomials are , , , and . Show that the set of these polynomials is a basis for .    Let be the set of all functions . Prove that is infinite-dimensional.    Suppose that is a linear transformation between vector spaces and that is finite-dimensional. Prove that .    Prove that is two-dimensional as a vector space over but four-dimensional as a vector space over .    Prove .    Prove .    Prove .    "
},
{
  "id": "lem-dim-lin-ind",
  "level": "2",
  "url": "sec-dimension.html#lem-dim-lin-ind",
  "type": "Lemma",
  "number": "5.3.1",
  "title": "",
  "body": "  Suppose that is a vector space and that . If is a linearly independent subset of , then .    "
},
{
  "id": "thm-inf-dimensional",
  "level": "2",
  "url": "sec-dimension.html#thm-inf-dimensional",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "",
  "body": "  Suppose that, for every , a vector space contains a linearly independent subset of size . Then is infinite-dimensional.    We will prove the contrapositive. If is finite-dimensional, then there exists a set such that . By , for any , cannot contain a linearly independent set of vectors. This completes the proof of the contrapositive.   "
},
{
  "id": "subsec-dimension-7",
  "level": "2",
  "url": "sec-dimension.html#subsec-dimension-7",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Let be the vector space of all polynomials with real coefficients. (We do not restrict the degree of polynomials in .) For any , contains the linearly independent set . Therefore, is infinite-dimensional.   "
},
{
  "id": "thm-bases-same-size",
  "level": "2",
  "url": "sec-dimension.html#thm-bases-same-size",
  "type": "Theorem",
  "number": "5.3.4",
  "title": "",
  "body": "  Suppose that and are both bases for a vector space . Then .    Since and is a linearly independent set, implies that . However, since and is a linearly independent set, also implies that . Therefore, .   "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "sec-dimension.html#def-dimension",
  "type": "Definition",
  "number": "5.3.5",
  "title": "",
  "body": "  Let be a finite-dimensional vector space. If , then the dimension of , written , is the size of any basis of . If , we say that is -dimensional .  If , then we define the dimension of to be 0.   "
},
{
  "id": "subsec-dimension-13",
  "level": "2",
  "url": "sec-dimension.html#subsec-dimension-13",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": "  Since is a basis for , then .   "
},
{
  "id": "subsec-dimension-14",
  "level": "2",
  "url": "sec-dimension.html#subsec-dimension-14",
  "type": "Example",
  "number": "5.3.7",
  "title": "",
  "body": "  Since is a basis for , then .   "
},
{
  "id": "prop-dim-less-spanning",
  "level": "2",
  "url": "sec-dimension.html#prop-dim-less-spanning",
  "type": "Proposition",
  "number": "5.3.8",
  "title": "",
  "body": "  The dimension of any vector space is less than or equal to the size of any spanning set.   "
},
{
  "id": "prop-dim-greater-lin-ind",
  "level": "2",
  "url": "sec-dimension.html#prop-dim-greater-lin-ind",
  "type": "Proposition",
  "number": "5.3.9",
  "title": "",
  "body": "  If a vector space is finite-dimensional and is a linearly independent set in , then .   "
},
{
  "id": "thm-same-dim-isomorphic",
  "level": "2",
  "url": "sec-dimension.html#thm-same-dim-isomorphic",
  "type": "Theorem",
  "number": "5.3.10",
  "title": "",
  "body": "  Let and be finite-dimensional vector spaces over . Then if and only if and are isomorphic.    Suppose that . Let be a basis for and let be a basis for . By , we can find such that for each , . Then by , is an isomorphism.  To prove the claim in the other direction, suppose that is an isomorphism. If is a basis for , then is a basis for by . Thus .   "
},
{
  "id": "cor-iso-fn",
  "level": "2",
  "url": "sec-dimension.html#cor-iso-fn",
  "type": "Corollary",
  "number": "5.3.11",
  "title": "",
  "body": "  If is a finite-dimensional vector space over and , then is isomorphic to .   "
},
{
  "id": "subsec-dimension-22",
  "level": "2",
  "url": "sec-dimension.html#subsec-dimension-22",
  "type": "Example",
  "number": "5.3.12",
  "title": "",
  "body": "  Since is a three-dimensional vector space over , and are isomorphic.   "
},
{
  "id": "thm-span-is-basis",
  "level": "2",
  "url": "sec-dimension.html#thm-span-is-basis",
  "type": "Theorem",
  "number": "5.3.13",
  "title": "",
  "body": "  Suppose that is a vector space with . If is such that , then is a basis for .    By The Spanning Set Theorem ( ), we know that a subset of will be a basis for . But since , the size of must be . Therefore, and is a basis for .   "
},
{
  "id": "thm-extend-lin-ind-to-basis",
  "level": "2",
  "url": "sec-dimension.html#thm-extend-lin-ind-to-basis",
  "type": "Theorem",
  "number": "5.3.14",
  "title": "",
  "body": "  Suppose that is a finite-dimensional vector space and that is a linearly independent set of vectors in . Then there is a basis of which contains .    Let be a linearly independent set of vectors in . If , then is a basis and we are done. If , then there exists some vector . By the Linear Dependence Lemma ( ), the set is linearly independent.  We can repeat this process. If , we are done; otherwise, we create in the same fashion that we created . We can continue doing this, adding one vector at a time to this set and maintaining linear independence. Eventually we must reach the point where , since otherwise would imply that is infinite-dimensional.   "
},
{
  "id": "thm-lin-ind-is-basis",
  "level": "2",
  "url": "sec-dimension.html#thm-lin-ind-is-basis",
  "type": "Theorem",
  "number": "5.3.15",
  "title": "",
  "body": "  Suppose that is a vector space with and that is a linearly independent subset of of size . Then is a basis for .   "
},
{
  "id": "thm-dim-subspaces",
  "level": "2",
  "url": "sec-dimension.html#thm-dim-subspaces",
  "type": "Theorem",
  "number": "5.3.16",
  "title": "",
  "body": "  Suppose that is a finite-dimensional vector space and that is a subspace of . Then the following hold.   The subspace is finite-dimensional.    We have .    We have if and only if .       We will prove these facts in order. If the subspace is , then we have nothing to prove. If not, then there is some non-zero vector . If , we are done; if not, then there exists . By , the set is linearly independent. We can continue to repeat this process. At each stage we have a linearly independent set , and this cannot continue indefinitely since is a subspace of , which is finite-dimensional. Thus this process must eventually stop when for some , and that proves that is finite dimensional.  The space is finite dimensional, so it has a basis . This is a linearly independent set of vectors in , so says that can be extended to a basis of . This means that will have at least as many vectors in it as , so .  If it is obvious that , so we only need to prove the claim in the other direction. We will prove the contrapositive, so we assume . Let be a basis for . Since , there exists a vector . By the set is linearly independent in , implying that . Therefore .   "
},
{
  "id": "subsec-dim-subspace-10",
  "level": "2",
  "url": "sec-dimension.html#subsec-dim-subspace-10",
  "type": "Example",
  "number": "5.3.17",
  "title": "",
  "body": "  We can apply this latest result to the vector space . The familiar subspaces of are all of the subspaces of .   The only subspace of dimension 0 in is the zero subspace .    One-dimensional subspaces of are lines through the origin. These can all be written as the span of a single (non-zero) vector.    Two-dimensional subspaces of are planes through the origin. These are all spanned by sets of two linearly independent vectors.    The only three-dimensional subspace of is itself.      "
},
{
  "id": "sec-dimension-5-1",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-5-1",
  "type": "Reading Question",
  "number": "5.3.3.1",
  "title": "",
  "body": " Consider the following vectors in : . By inspection, why is the set a basis for ?   "
},
{
  "id": "sec-dimension-5-2",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-5-2",
  "type": "Reading Question",
  "number": "5.3.3.2",
  "title": "",
  "body": " Let , , , and be vectors in .   The set is not a basis for , and there's a very short argument why. What is that argument?     Must there be a subset of which is a basis of ? Why or why not?      "
},
{
  "id": "sec-dimension-6-1",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-1",
  "type": "Exercise",
  "number": "5.3.4.1",
  "title": "",
  "body": " Find the dimension of the subspace of consisting of all vectors whose first and third coordinates are equal.  "
},
{
  "id": "sec-dimension-6-2",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-2",
  "type": "Exercise",
  "number": "5.3.4.2",
  "title": "",
  "body": " For each of the following sets of vectors in the given vector space, find the dimension of the subspace spanned by that set of vectors.    in if      in if      "
},
{
  "id": "sec-dimension-6-3",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-3",
  "type": "Exercise",
  "number": "5.3.4.3",
  "title": "",
  "body": " For each of the following matrices , determine the dimensions of and .    ,      ,      "
},
{
  "id": "exer-num-pivots-matrix",
  "level": "2",
  "url": "sec-dimension.html#exer-num-pivots-matrix",
  "type": "Exercise",
  "number": "5.3.4.4",
  "title": "",
  "body": " Let be a matrix.   Prove that is the number of non-pivot columns in .    Prove that is the number of pivot columns of .     "
},
{
  "id": "sec-dimension-6-5",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-5",
  "type": "Exercise",
  "number": "5.3.4.5",
  "title": "",
  "body": " Determine whether the following statements are true or false. Justify your answer either way.   If a set spans a finite-dimensional space , and if is a set of more than vectors in , then is linearly dependent.    The vector space is a subspace of .    A vector space is infinite-dimensional if it is spanned by an infinite set.     "
},
{
  "id": "sec-dimension-6-6",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-6",
  "type": "Exercise",
  "number": "5.3.4.6",
  "title": "",
  "body": " Determine whether the following statements are true or false. Justify your answer either way.   If , then there exists a spanning set of vectors in .    If every set of vectors in fails to span , then .    If and , then every set of non-zero vectors in is linearly independent.     "
},
{
  "id": "sec-dimension-6-7",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-7",
  "type": "Exercise",
  "number": "5.3.4.7",
  "title": "",
  "body": " The first four Hermite polynomials are , , , and . Show that the set of these polynomials is a basis for .  "
},
{
  "id": "sec-dimension-6-8",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-8",
  "type": "Exercise",
  "number": "5.3.4.8",
  "title": "",
  "body": " The first four Laguerre polynomials are , , , and . Show that the set of these polynomials is a basis for .  "
},
{
  "id": "sec-dimension-6-9",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-9",
  "type": "Exercise",
  "number": "5.3.4.9",
  "title": "",
  "body": " Let be the set of all functions . Prove that is infinite-dimensional.  "
},
{
  "id": "sec-dimension-6-10",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-10",
  "type": "Exercise",
  "number": "5.3.4.10",
  "title": "",
  "body": " Suppose that is a linear transformation between vector spaces and that is finite-dimensional. Prove that .  "
},
{
  "id": "sec-dimension-6-11",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-11",
  "type": "Exercise",
  "number": "5.3.4.11",
  "title": "",
  "body": " Prove that is two-dimensional as a vector space over but four-dimensional as a vector space over .  "
},
{
  "id": "sec-dimension-6-12",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-12",
  "type": "Exercise",
  "number": "5.3.4.12",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "sec-dimension-6-13",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-13",
  "type": "Exercise",
  "number": "5.3.4.13",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "sec-dimension-6-14",
  "level": "2",
  "url": "sec-dimension.html#sec-dimension-6-14",
  "type": "Exercise",
  "number": "5.3.4.14",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "sec-rank",
  "level": "1",
  "url": "sec-rank.html",
  "type": "Section",
  "number": "5.4",
  "title": "Rank and Nullity",
  "body": " Rank and Nullity   In this section we will connect dimension with the subspaces that are associated with linear transformations (see ).    Defining Rank and Nullity  We begin by defining the dimension of the range of a linear transformation.    Let be a linear transformation. Then the rank of , denoted , is the dimension of the range of : . The rank of a matrix is the dimension of the column space of : .    It may seem strange to define the same word in two ways. However, since the range of is exactly the column space of when is multiplication by , these two definitions coincide.  When is an matrix over , its rows are vectors in and its columns are vectors in . This is why the column space of is a subspace of . We can also examine the analogous space for the rows.    The set of all linear combinations of the rows of a matrix is called the row space of . We denote this by .     Since the rows of are the columns of , we have .   With the definition of the row space it is natural to wonder how the sizes of the row and column spaces compare to each other. The following results will help us settle this matter.    If and are row equivalent matrices, then . Further, if is in REF, then the non-zero rows of form a basis for (and ).    If is reduced to , then the rows of are linear combinations of the rows of . (The elementary row operations produce linear combinations of the original rows.) Therefore, any linear combination of the rows of can be written as a linear combination of the rows of . This proves that . Since all row operations are reversible, we can use row operations to produce from , and this same argument shows that . This proves that .  If the matrix is in REF, the nonzero rows are linearly independent because no nonzero row is a linear combination of the rows below it. Here we are applying the Linear Dependence Lemma ( ) to the nonzero rows from bottom to top. Since the rows of span by definition, the fact that they are linearly independent means that they form a basis for .      Let . Then .    If we put into REF, then tells us that the number of pivots is since that is the number of vectors in a basis of . However, the number of pivots in a REF (or the RREF) of is also . (See .) This proves that .     This theorem says that . This theorem also answers the question about the relative sizes of and they are the same size!     Consider the following matrix : . We will find a basis for . Here is the RREF of : . We have used the RREF of a matrix in the past to find bases for the null space and column space of a matrix. Now, we will use it to find a basis for the row space. tells us that the nonzero rows of this RREF are the basis we seek, therefore a basis for is , where .    We have defined the dimension of the range of a linear transformation , so we now turn to the kernel.    If is a linear transformation, then the nullity of is the dimension of the kernel of . If is a matrix, then the nullity of is the dimension of the null space of .     As we saw with rank, these two uses of nullity coincide for the situation when is multiplication by .  Some other texts use the notation to indicate nullity instead of null space. We will not introduce any additional notation for the nullity, but we will use or as appropriate.     The Rank-Nullity Theorem  The following theorem brings together the rank and nullity of a matrix\/linear transformation.   The Rank-Nullity Theorem   If , then . If , then .    We will prove the result for matrices. The proof for linear transformations is a bit more technical. (The reader should note that the result for linear transformations implies the result for matrices!)  If , let be the RREF of . Then is the number of pivot columns in . Further, is the number of non-pivot columns in . (See .) Since each of the columns of must be either a pivot or a non-pivot column, and since and have the same number of columns, this proves the theorem.      If is a matrix with a three-dimensional null space, this theorem tells us that the rank of is .  Let us consider an additional scenario: Could a matrix have a one-dimensional null space? If such a matrix existed, it would have a rank of , according to . But the largest rank that a matrix can have is 6, since there cannot be more pivots than there are rows. So the answer is no, a matrix cannot have a one-dimensional null space.    When the dimensions of the domain and codomain of a linear transformation are equal, some properties of such a transformation are easier to prove.    If and , then the following are equivalent.   The transformation is injective.    The transformation is surjective.    The transformation is an isomorphism.       By , is injective if and only if . In other words, is injective if and only if . By , this happens if and only if , and if , if and only if is injective. This proves that is injective if and only if is surjective. Since a bijective linear transformation is an isomorphism, our proof is complete.    To close out this section, we present a long theorem with many equivalent statements. We will omit a proof, because the equivalence of most of these statements has been already established at various places in this text. (In other books, this theorem forms the central focus of the text. It is certainly important, but we have chosen a different emphasis.)   The Invertible Matrix Theorem   Let . Then the following statements are equivalent.   The matrix is invertible.    The matrix is row equivalent to .    The matrix has pivots.    The equation has only the trivial solution.    The columns of form a linearly independent set.    If is multiplication by , then is injective.    The equation has a solution for all .    The columns of span .    The linear transformation is surjective.    There is an matrix such that .    The matrix is invertible.    We have .    The columns of form a basis for .    We have .    We have .    We have .    We have .       This theorem ties together threads from almost every section we've covered, which is quite an achievement! The reader should note that this result only applies to square matrices.     Consider the following matrix : . Find a basis for .    Suppose that is a linear transformation and that and . What are the possible values for ? Explain.      Find the rank and nullity of each of the following matrices.    ,      ,        Let be the differentiation linear transformation. Calculate and .    If and are matrices, prove that .    Suppose that and that and are both finite-dimensional.   Prove that is surjective if and only if .    Prove that is injective if and only if .       Suppose that is a linear system which is consistent but which does not have a unique solution. Prove that there must be a vector such that the system is inconsistent.       If a matrix has rank 3, find , , and .    If the null space of a matrix is 5-dimensional, what is the dimension of the column space of ?    If is a matrix, what is the smallest possible dimension of ?       Suppose a nonhomogeneous linear system of nine equations and ten variables has a solution for all possible constants on the right side of the equations. Is it possible to find two nonzero solutions of the associated homogeneous system that are not multiples of each other? Explain.    Suppose and . What has to be true about the two numbers and in order for the equation to be consistent? Explain.    Prove that if , then .    Prove that if , then .    Let .   Prove that if , then cannot be injective.    Prove that if , then cannot be surjective.       "
},
{
  "id": "def-rank",
  "level": "2",
  "url": "sec-rank.html#def-rank",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  Let be a linear transformation. Then the rank of , denoted , is the dimension of the range of : . The rank of a matrix is the dimension of the column space of : .   "
},
{
  "id": "def-row-space",
  "level": "2",
  "url": "sec-rank.html#def-row-space",
  "type": "Definition",
  "number": "5.4.2",
  "title": "",
  "body": "  The set of all linear combinations of the rows of a matrix is called the row space of . We denote this by .   "
},
{
  "id": "subsec-define-rank-nullity-7",
  "level": "2",
  "url": "sec-rank.html#subsec-define-rank-nullity-7",
  "type": "Note",
  "number": "5.4.3",
  "title": "",
  "body": " Since the rows of are the columns of , we have .  "
},
{
  "id": "prop-row-equiv-row-spaces",
  "level": "2",
  "url": "sec-rank.html#prop-row-equiv-row-spaces",
  "type": "Proposition",
  "number": "5.4.4",
  "title": "",
  "body": "  If and are row equivalent matrices, then . Further, if is in REF, then the non-zero rows of form a basis for (and ).    If is reduced to , then the rows of are linear combinations of the rows of . (The elementary row operations produce linear combinations of the original rows.) Therefore, any linear combination of the rows of can be written as a linear combination of the rows of . This proves that . Since all row operations are reversible, we can use row operations to produce from , and this same argument shows that . This proves that .  If the matrix is in REF, the nonzero rows are linearly independent because no nonzero row is a linear combination of the rows below it. Here we are applying the Linear Dependence Lemma ( ) to the nonzero rows from bottom to top. Since the rows of span by definition, the fact that they are linearly independent means that they form a basis for .   "
},
{
  "id": "thm-row-space-dim",
  "level": "2",
  "url": "sec-rank.html#thm-row-space-dim",
  "type": "Theorem",
  "number": "5.4.5",
  "title": "",
  "body": "  Let . Then .    If we put into REF, then tells us that the number of pivots is since that is the number of vectors in a basis of . However, the number of pivots in a REF (or the RREF) of is also . (See .) This proves that .   "
},
{
  "id": "subsec-define-rank-nullity-11",
  "level": "2",
  "url": "sec-rank.html#subsec-define-rank-nullity-11",
  "type": "Note",
  "number": "5.4.6",
  "title": "",
  "body": " This theorem says that . This theorem also answers the question about the relative sizes of and they are the same size!  "
},
{
  "id": "subsec-define-rank-nullity-12",
  "level": "2",
  "url": "sec-rank.html#subsec-define-rank-nullity-12",
  "type": "Example",
  "number": "5.4.7",
  "title": "",
  "body": "  Consider the following matrix : . We will find a basis for . Here is the RREF of : . We have used the RREF of a matrix in the past to find bases for the null space and column space of a matrix. Now, we will use it to find a basis for the row space. tells us that the nonzero rows of this RREF are the basis we seek, therefore a basis for is , where .   "
},
{
  "id": "def-nullity",
  "level": "2",
  "url": "sec-rank.html#def-nullity",
  "type": "Definition",
  "number": "5.4.8",
  "title": "",
  "body": "  If is a linear transformation, then the nullity of is the dimension of the kernel of . If is a matrix, then the nullity of is the dimension of the null space of .   "
},
{
  "id": "subsec-define-rank-nullity-15",
  "level": "2",
  "url": "sec-rank.html#subsec-define-rank-nullity-15",
  "type": "Note",
  "number": "5.4.9",
  "title": "",
  "body": " As we saw with rank, these two uses of nullity coincide for the situation when is multiplication by .  Some other texts use the notation to indicate nullity instead of null space. We will not introduce any additional notation for the nullity, but we will use or as appropriate.  "
},
{
  "id": "thm-rank-nullity",
  "level": "2",
  "url": "sec-rank.html#thm-rank-nullity",
  "type": "Theorem",
  "number": "5.4.10",
  "title": "The Rank-Nullity Theorem.",
  "body": " The Rank-Nullity Theorem   If , then . If , then .    We will prove the result for matrices. The proof for linear transformations is a bit more technical. (The reader should note that the result for linear transformations implies the result for matrices!)  If , let be the RREF of . Then is the number of pivot columns in . Further, is the number of non-pivot columns in . (See .) Since each of the columns of must be either a pivot or a non-pivot column, and since and have the same number of columns, this proves the theorem.   "
},
{
  "id": "subsec-rank-thm-4",
  "level": "2",
  "url": "sec-rank.html#subsec-rank-thm-4",
  "type": "Example",
  "number": "5.4.11",
  "title": "",
  "body": "  If is a matrix with a three-dimensional null space, this theorem tells us that the rank of is .  Let us consider an additional scenario: Could a matrix have a one-dimensional null space? If such a matrix existed, it would have a rank of , according to . But the largest rank that a matrix can have is 6, since there cannot be more pivots than there are rows. So the answer is no, a matrix cannot have a one-dimensional null space.   "
},
{
  "id": "cor-lin-trans-dimensions",
  "level": "2",
  "url": "sec-rank.html#cor-lin-trans-dimensions",
  "type": "Corollary",
  "number": "5.4.12",
  "title": "",
  "body": "  If and , then the following are equivalent.   The transformation is injective.    The transformation is surjective.    The transformation is an isomorphism.       By , is injective if and only if . In other words, is injective if and only if . By , this happens if and only if , and if , if and only if is injective. This proves that is injective if and only if is surjective. Since a bijective linear transformation is an isomorphism, our proof is complete.   "
},
{
  "id": "thm-ivt",
  "level": "2",
  "url": "sec-rank.html#thm-ivt",
  "type": "Theorem",
  "number": "5.4.13",
  "title": "The Invertible Matrix Theorem.",
  "body": " The Invertible Matrix Theorem   Let . Then the following statements are equivalent.   The matrix is invertible.    The matrix is row equivalent to .    The matrix has pivots.    The equation has only the trivial solution.    The columns of form a linearly independent set.    If is multiplication by , then is injective.    The equation has a solution for all .    The columns of span .    The linear transformation is surjective.    There is an matrix such that .    The matrix is invertible.    We have .    The columns of form a basis for .    We have .    We have .    We have .    We have .      "
},
{
  "id": "sec-rank-5-1",
  "level": "2",
  "url": "sec-rank.html#sec-rank-5-1",
  "type": "Reading Question",
  "number": "5.4.3.1",
  "title": "",
  "body": " Consider the following matrix : . Find a basis for .  "
},
{
  "id": "sec-rank-5-2",
  "level": "2",
  "url": "sec-rank.html#sec-rank-5-2",
  "type": "Reading Question",
  "number": "5.4.3.2",
  "title": "",
  "body": " Suppose that is a linear transformation and that and . What are the possible values for ? Explain.  "
},
{
  "id": "sec-rank-6-1",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-1",
  "type": "Exercise",
  "number": "5.4.4.1",
  "title": "",
  "body": " Find the rank and nullity of each of the following matrices.    ,      ,      "
},
{
  "id": "sec-rank-6-2",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-2",
  "type": "Exercise",
  "number": "5.4.4.2",
  "title": "",
  "body": " Let be the differentiation linear transformation. Calculate and .  "
},
{
  "id": "sec-rank-6-3",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-3",
  "type": "Exercise",
  "number": "5.4.4.3",
  "title": "",
  "body": " If and are matrices, prove that .  "
},
{
  "id": "sec-rank-6-4",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-4",
  "type": "Exercise",
  "number": "5.4.4.4",
  "title": "",
  "body": " Suppose that and that and are both finite-dimensional.   Prove that is surjective if and only if .    Prove that is injective if and only if .     "
},
{
  "id": "sec-rank-6-5",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-5",
  "type": "Exercise",
  "number": "5.4.4.5",
  "title": "",
  "body": " Suppose that is a linear system which is consistent but which does not have a unique solution. Prove that there must be a vector such that the system is inconsistent.  "
},
{
  "id": "sec-rank-6-6",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-6",
  "type": "Exercise",
  "number": "5.4.4.6",
  "title": "",
  "body": "    If a matrix has rank 3, find , , and .    If the null space of a matrix is 5-dimensional, what is the dimension of the column space of ?    If is a matrix, what is the smallest possible dimension of ?     "
},
{
  "id": "sec-rank-6-7",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-7",
  "type": "Exercise",
  "number": "5.4.4.7",
  "title": "",
  "body": " Suppose a nonhomogeneous linear system of nine equations and ten variables has a solution for all possible constants on the right side of the equations. Is it possible to find two nonzero solutions of the associated homogeneous system that are not multiples of each other? Explain.  "
},
{
  "id": "sec-rank-6-8",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-8",
  "type": "Exercise",
  "number": "5.4.4.8",
  "title": "",
  "body": " Suppose and . What has to be true about the two numbers and in order for the equation to be consistent? Explain.  "
},
{
  "id": "sec-rank-6-9",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-9",
  "type": "Exercise",
  "number": "5.4.4.9",
  "title": "",
  "body": " Prove that if , then .  "
},
{
  "id": "sec-rank-6-10",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-10",
  "type": "Exercise",
  "number": "5.4.4.10",
  "title": "",
  "body": " Prove that if , then .  "
},
{
  "id": "sec-rank-6-11",
  "level": "2",
  "url": "sec-rank.html#sec-rank-6-11",
  "type": "Exercise",
  "number": "5.4.4.11",
  "title": "",
  "body": " Let .   Prove that if , then cannot be injective.    Prove that if , then cannot be surjective.     "
},
{
  "id": "sec-coordinates",
  "level": "1",
  "url": "sec-coordinates.html",
  "type": "Section",
  "number": "5.5",
  "title": "Coordinates",
  "body": " Coordinates   We have recently shown ( ) that all -dimensional vector spaces over are isomorphic to . In this section we explore the vast implications of this isomorphism.    Coordinates of Vectors  If is a finite-dimensional vector space over , then it has a basis . We have seen ( ) that each vector in then has a unique representation as a linear combination of these basis vectors. In the definition that follows, we focus on the coefficients in these linear combinations.    The coordinates of a vector with respect to a basis are the unique scalars such that . The coordinate vector of with respect to is the vector , .     When the basis we are using is unambiguous, we may drop a bit of the cumbersome terminology contained in the phrase coordinate vector of with respect to and simply refer to the coordinate vector of .    This process of assigning to a vector a vector is sometimes called a coordinate mapping , and it defines a function . This function is actually an isomorphism of vector spaces.    Let be an -dimensional vector space over , and let be a basis for . Consider the coordinate map given by . Then is an isomorphism.    The function is a linear transformation. (We ask the reader to verify this in the exercises.) We note that maps the basis vectors in to the standard basis in . So, by , is an isomorphism.    The existence of coordinate vectors means that just about everything for finite-dimensional vector spaces can be accomplished with vectors and matrices over . We explore this in the following examples.    Let be the standard basis of the vector space . If and are , then the coordinate vectors of and are . Note that the order of the coordinates really matters, so in this case the terms in had to be reordered (in increasing powers of ) before the coefficients were entered as the coordinate vector.      Within , consider , where . Since neither of these vectors is a scalar multiple of the other, is a linearly independent set and therefore a basis for . If we let be , we can verify that by row-reducing the appropriate matrix: . Since there is no pivot in the final column, we see that . Further, we can write down the coordinate vector of with respect to by studying this row-reduced matrix. We see that . It may seem strange for a vector in the three-dimensional space to have a coordinate vector with only two entries, but this is due to the fact that is two-dimensional. (It has a basis of only two vectors!) The coordinate mapping in this case says that is isomorphic to , and this is why the coordinate vector for any vector in has only two entries.    There are some consequences of that we want to spell out explicitly because of their usefulness. The proof of the following proposition can be found as part of the proof of .    Let be a vector space of dimension over . Since the coordinate mapping is an isomorphism, then the following statements are true.   A set of vectors in is linearly independent if and only if the set of coordinate vectors is linearly independent in .    A set of vectors spans if and only if the set of coordinate vectors spans .       Hopefully the reader can now see exactly how helpful the coordinate mapping isomorphism is. The following example spells this out explicitly.    Consider the set of vectors in , where . With respect to the standard basis of , these are the coordinate vectors: . By row-reducing the matrix which has these coordinate vectors as its columns, we can see that the set of coordinate vectors is linearly independent in : . This shows that the set is linearly independent in .  For dimension reasons, we already knew that the set cannot span , however this row-reduced matrix confirms it. Since there is not a pivot in each row, the set of coordinate vectors does not span , and this means that does not span .      Coordinates and Linear Transformations  Back in , we showed how every linear transformation could be realized as multiplication by a matrix over . We now bring that understanding into contact with coordinate vectors. While not every linear transformation between vector spaces is multiplication by a matrix, every linear transformation between finite-dimensional vector spaces can be represented as multiplication by a matrix when considering the relevant coordinate vectors.    Let and be - and -dimensional vector spaces over , respectively, and let be a linear transformation. Further, suppose that is a basis for and is a basis for . If, for each , , we have as the coordinates of with respect to , then the matrix of with respect to and is the matrix . (In other words, column of this matrix is the coordinate vector .) We denote this matrix as .  When and , then we use the notation and refer to the matrix of with respect to .  Finally, when the basis\/bases we are using are unambiguous, we may refer to or as the coordinate matrix of .    The point of this rather long (and cumbersome!) definition is that we can represent a linear transformation as multiplication by a matrix. That's what the following proposition shows.    Let be a linear transformation between finite-dimensional vector spaces. Suppose that and have bases and , respectively. Let . Then, for any , .    Let the bases and be and . For , suppose that , or, in other words, . We also assume that, for each , , the coordinates of with respect to are .  Then, using the linearity of , we have . This says that the th coordinate of with respect to is , which is the same as the th entry of .     According to this proposition, here is the way to realize a linear transformation as a matrix. Form by calculating the coordinate vector for every vector . Then, to use this matrix to determine what happens to a vector , find the coordinate vector . After multiplying this vector by , the result will be the coordinate vector . In order to recover the value of , use the basis vectors in and this coordinate vector to find the correct linear combination.     Let be the differentiation function. (We proved that a very similar function was a linear transformation in .) Let be the standard basis for , and let be the standard basis for . Here we calculate the coordinate vectors for the derivative of each of the polynomials in : . These coordinate vectors form the columns of the matrix .  We will now use this matrix to carry out the action of . Let's take the derivative of . Since the coordinate vector of with respect to is , we can multiply this vector by to get : . This tells us that the coordinates for with respect to are , , and . In other words, , and this matches what we know to be the derivative of .      We consider a linear transformation defined by . We let be the standard basis for and be the standard basis for . We now write for each : . These coordinate vectors make up the columns of the matrix . If we wanted to calculate , where , we can do so using coordinate vectors and the matrix . Since the coordinate vector of with respect to is fairly obvious it is itself we can proceed with this calculation: . This tells us that .    We will end this section with two results related to coordinate matrices. This first result says that the composition of linear transformation really does match up with the multiplication of matrices.    Let , , and be finite-dimensional vector spaces with bases , , and , respectively. Suppose that and that . Then .    This final result states that the invertibility of a linear transformation and the invertibility of its coordinate matrix are tied together in the predictable way.    Let and be finite-dimensional vector spaces with bases and , respectively. Suppose that and that . Then is invertible if and only if is invertible, and in that case, .        Let and .   The set is a basis for . Without doing any calculations, explain why this is so. (I'm not looking for the definition of a basis, I want an explanation as to why this set satisfies that definition.)    Let . What is the coordinate vector of with respect to ?        Let be the following function: . Let be the standard basis for .   Find the coordinate matrix for .     Use this coordinate matrix to calculate , if .          For the given basis of and the given coordinate vector , find .    ,      ,        For the basis of and the coordinate vector , find if and .    Find the coordinate vectors for each of the following vectors with respect to the basis of , if .                Find the coordinate vectors for each of the following polynomials with respect to the basis of , if .                Use coordinate vectors to test the linear independence of the following sets of polynomials in .    if      if        Use coordinate vectors to test whether the following sets of vectors span .    if      if        Let be the linear transformation . Let be the standard basis for and let be the standard basis for .   Find the coordinate matrix .    Use this coordinate matrix to calculate .       Let be the linear transformation . Let be the standard basis for and let be the standard basis for .   Find the coordinate matrix .    Use this coordinate matrix to calculate for .       Let be the linear transformation . Let be the standard basis for .   Choose a basis for which is not the standard basis. Prove that your set of polynomials is a basis.    Find the coordinate matrix .    Use this coordinate matrix to calculate .       Let be the derivative and let be the linear transformation which is multiplication by . Let be the standard basis for and let be the standard basis for .   Find the coordinate matrix .    Find the coordinate matrix .    Find the coordinate matrix .       Verify that the coordinate mapping in is a linear transformation.    "
},
{
  "id": "def-coordinates",
  "level": "2",
  "url": "sec-coordinates.html#def-coordinates",
  "type": "Definition",
  "number": "5.5.1",
  "title": "",
  "body": "  The coordinates of a vector with respect to a basis are the unique scalars such that . The coordinate vector of with respect to is the vector , .   "
},
{
  "id": "subsec-coord-vectors-4",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coord-vectors-4",
  "type": "Note",
  "number": "5.5.2",
  "title": "",
  "body": " When the basis we are using is unambiguous, we may drop a bit of the cumbersome terminology contained in the phrase coordinate vector of with respect to and simply refer to the coordinate vector of .   "
},
{
  "id": "subsec-coord-vectors-5",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coord-vectors-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate mapping "
},
{
  "id": "thm-coord-map-isomorphism",
  "level": "2",
  "url": "sec-coordinates.html#thm-coord-map-isomorphism",
  "type": "Theorem",
  "number": "5.5.3",
  "title": "",
  "body": "  Let be an -dimensional vector space over , and let be a basis for . Consider the coordinate map given by . Then is an isomorphism.    The function is a linear transformation. (We ask the reader to verify this in the exercises.) We note that maps the basis vectors in to the standard basis in . So, by , is an isomorphism.   "
},
{
  "id": "subsec-coord-vectors-8",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coord-vectors-8",
  "type": "Example",
  "number": "5.5.4",
  "title": "",
  "body": "  Let be the standard basis of the vector space . If and are , then the coordinate vectors of and are . Note that the order of the coordinates really matters, so in this case the terms in had to be reordered (in increasing powers of ) before the coefficients were entered as the coordinate vector.   "
},
{
  "id": "subsec-coord-vectors-9",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coord-vectors-9",
  "type": "Example",
  "number": "5.5.5",
  "title": "",
  "body": "  Within , consider , where . Since neither of these vectors is a scalar multiple of the other, is a linearly independent set and therefore a basis for . If we let be , we can verify that by row-reducing the appropriate matrix: . Since there is no pivot in the final column, we see that . Further, we can write down the coordinate vector of with respect to by studying this row-reduced matrix. We see that . It may seem strange for a vector in the three-dimensional space to have a coordinate vector with only two entries, but this is due to the fact that is two-dimensional. (It has a basis of only two vectors!) The coordinate mapping in this case says that is isomorphic to , and this is why the coordinate vector for any vector in has only two entries.   "
},
{
  "id": "prop-coord-map-li-span",
  "level": "2",
  "url": "sec-coordinates.html#prop-coord-map-li-span",
  "type": "Proposition",
  "number": "5.5.6",
  "title": "",
  "body": "  Let be a vector space of dimension over . Since the coordinate mapping is an isomorphism, then the following statements are true.   A set of vectors in is linearly independent if and only if the set of coordinate vectors is linearly independent in .    A set of vectors spans if and only if the set of coordinate vectors spans .      "
},
{
  "id": "subsec-coord-vectors-13",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coord-vectors-13",
  "type": "Example",
  "number": "5.5.7",
  "title": "",
  "body": "  Consider the set of vectors in , where . With respect to the standard basis of , these are the coordinate vectors: . By row-reducing the matrix which has these coordinate vectors as its columns, we can see that the set of coordinate vectors is linearly independent in : . This shows that the set is linearly independent in .  For dimension reasons, we already knew that the set cannot span , however this row-reduced matrix confirms it. Since there is not a pivot in each row, the set of coordinate vectors does not span , and this means that does not span .   "
},
{
  "id": "def-coordinate-matrix",
  "level": "2",
  "url": "sec-coordinates.html#def-coordinate-matrix",
  "type": "Definition",
  "number": "5.5.8",
  "title": "",
  "body": "  Let and be - and -dimensional vector spaces over , respectively, and let be a linear transformation. Further, suppose that is a basis for and is a basis for . If, for each , , we have as the coordinates of with respect to , then the matrix of with respect to and is the matrix . (In other words, column of this matrix is the coordinate vector .) We denote this matrix as .  When and , then we use the notation and refer to the matrix of with respect to .  Finally, when the basis\/bases we are using are unambiguous, we may refer to or as the coordinate matrix of .   "
},
{
  "id": "prop-matrix-linear-tran-coordinates",
  "level": "2",
  "url": "sec-coordinates.html#prop-matrix-linear-tran-coordinates",
  "type": "Proposition",
  "number": "5.5.9",
  "title": "",
  "body": "  Let be a linear transformation between finite-dimensional vector spaces. Suppose that and have bases and , respectively. Let . Then, for any , .    Let the bases and be and . For , suppose that , or, in other words, . We also assume that, for each , , the coordinates of with respect to are .  Then, using the linearity of , we have . This says that the th coordinate of with respect to is , which is the same as the th entry of .   "
},
{
  "id": "subsec-coordinates-matrices-6",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coordinates-matrices-6",
  "type": "Note",
  "number": "5.5.10",
  "title": "",
  "body": " According to this proposition, here is the way to realize a linear transformation as a matrix. Form by calculating the coordinate vector for every vector . Then, to use this matrix to determine what happens to a vector , find the coordinate vector . After multiplying this vector by , the result will be the coordinate vector . In order to recover the value of , use the basis vectors in and this coordinate vector to find the correct linear combination.  "
},
{
  "id": "subsec-coordinates-matrices-7",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coordinates-matrices-7",
  "type": "Example",
  "number": "5.5.11",
  "title": "",
  "body": "  Let be the differentiation function. (We proved that a very similar function was a linear transformation in .) Let be the standard basis for , and let be the standard basis for . Here we calculate the coordinate vectors for the derivative of each of the polynomials in : . These coordinate vectors form the columns of the matrix .  We will now use this matrix to carry out the action of . Let's take the derivative of . Since the coordinate vector of with respect to is , we can multiply this vector by to get : . This tells us that the coordinates for with respect to are , , and . In other words, , and this matches what we know to be the derivative of .   "
},
{
  "id": "subsec-coordinates-matrices-8",
  "level": "2",
  "url": "sec-coordinates.html#subsec-coordinates-matrices-8",
  "type": "Example",
  "number": "5.5.12",
  "title": "",
  "body": "  We consider a linear transformation defined by . We let be the standard basis for and be the standard basis for . We now write for each : . These coordinate vectors make up the columns of the matrix . If we wanted to calculate , where , we can do so using coordinate vectors and the matrix . Since the coordinate vector of with respect to is fairly obvious it is itself we can proceed with this calculation: . This tells us that .   "
},
{
  "id": "thm-mult-coord-matrices",
  "level": "2",
  "url": "sec-coordinates.html#thm-mult-coord-matrices",
  "type": "Theorem",
  "number": "5.5.13",
  "title": "",
  "body": "  Let , , and be finite-dimensional vector spaces with bases , , and , respectively. Suppose that and that . Then .   "
},
{
  "id": "cor-coord-matrix-inverse",
  "level": "2",
  "url": "sec-coordinates.html#cor-coord-matrix-inverse",
  "type": "Corollary",
  "number": "5.5.14",
  "title": "",
  "body": "  Let and be finite-dimensional vector spaces with bases and , respectively. Suppose that and that . Then is invertible if and only if is invertible, and in that case, .   "
},
{
  "id": "sec-coordinates-5-1",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-5-1",
  "type": "Reading Question",
  "number": "5.5.3.1",
  "title": "",
  "body": " Let and .   The set is a basis for . Without doing any calculations, explain why this is so. (I'm not looking for the definition of a basis, I want an explanation as to why this set satisfies that definition.)    Let . What is the coordinate vector of with respect to ?      "
},
{
  "id": "sec-coordinates-5-2",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-5-2",
  "type": "Reading Question",
  "number": "5.5.3.2",
  "title": "",
  "body": " Let be the following function: . Let be the standard basis for .   Find the coordinate matrix for .     Use this coordinate matrix to calculate , if .      "
},
{
  "id": "sec-coordinates-6-1",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-1",
  "type": "Exercise",
  "number": "5.5.4.1",
  "title": "",
  "body": " For the given basis of and the given coordinate vector , find .    ,      ,      "
},
{
  "id": "sec-coordinates-6-2",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-2",
  "type": "Exercise",
  "number": "5.5.4.2",
  "title": "",
  "body": " For the basis of and the coordinate vector , find if and .  "
},
{
  "id": "sec-coordinates-6-3",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-3",
  "type": "Exercise",
  "number": "5.5.4.3",
  "title": "",
  "body": " Find the coordinate vectors for each of the following vectors with respect to the basis of , if .              "
},
{
  "id": "sec-coordinates-6-4",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-4",
  "type": "Exercise",
  "number": "5.5.4.4",
  "title": "",
  "body": " Find the coordinate vectors for each of the following polynomials with respect to the basis of , if .              "
},
{
  "id": "sec-coordinates-6-5",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-5",
  "type": "Exercise",
  "number": "5.5.4.5",
  "title": "",
  "body": " Use coordinate vectors to test the linear independence of the following sets of polynomials in .    if      if      "
},
{
  "id": "sec-coordinates-6-6",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-6",
  "type": "Exercise",
  "number": "5.5.4.6",
  "title": "",
  "body": " Use coordinate vectors to test whether the following sets of vectors span .    if      if      "
},
{
  "id": "sec-coordinates-6-7",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-7",
  "type": "Exercise",
  "number": "5.5.4.7",
  "title": "",
  "body": " Let be the linear transformation . Let be the standard basis for and let be the standard basis for .   Find the coordinate matrix .    Use this coordinate matrix to calculate .     "
},
{
  "id": "sec-coordinates-6-8",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-8",
  "type": "Exercise",
  "number": "5.5.4.8",
  "title": "",
  "body": " Let be the linear transformation . Let be the standard basis for and let be the standard basis for .   Find the coordinate matrix .    Use this coordinate matrix to calculate for .     "
},
{
  "id": "sec-coordinates-6-9",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-9",
  "type": "Exercise",
  "number": "5.5.4.9",
  "title": "",
  "body": " Let be the linear transformation . Let be the standard basis for .   Choose a basis for which is not the standard basis. Prove that your set of polynomials is a basis.    Find the coordinate matrix .    Use this coordinate matrix to calculate .     "
},
{
  "id": "sec-coordinates-6-10",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-10",
  "type": "Exercise",
  "number": "5.5.4.10",
  "title": "",
  "body": " Let be the derivative and let be the linear transformation which is multiplication by . Let be the standard basis for and let be the standard basis for .   Find the coordinate matrix .    Find the coordinate matrix .    Find the coordinate matrix .     "
},
{
  "id": "sec-coordinates-6-11",
  "level": "2",
  "url": "sec-coordinates.html#sec-coordinates-6-11",
  "type": "Exercise",
  "number": "5.5.4.11",
  "title": "",
  "body": " Verify that the coordinate mapping in is a linear transformation.  "
},
{
  "id": "sec-change-of-basis",
  "level": "1",
  "url": "sec-change-of-basis.html",
  "type": "Section",
  "number": "5.6",
  "title": "Change of Basis",
  "body": " Change of Basis   Every basis for a vector space gives a different angle on that space we get a different coordinate system for each basis. Since any finite-dimensional vector space has many bases, in this section we explain how to move between bases.    The Change-of-Basis Matrix  We will first describe a situation in which this technique will be useful. Consider the following two bases for : and , where . We can verify that and are bases for since they are both linearly independent sets of two vectors in a two-dimensional space.  If we have a vector , it is straightforward to calculate both and . The question for us is: how do these two coordinate vectors relate to each other? Specifically, how might we calculate one coordinate vector from the other one?  It turns out that we already have the necessary machinery for this calculation. We summarize the process in the following proposition.    Let and be two bases for a finite-dimensional vector space . Then, for any , we have , where is the identity transformation.    This is a simple application of to the identity transformation : .      If and are two bases for a finite-dimensional vector space , then the matrix is called the change-of-basis matrix from to .      We will continue the example begun earlier in this section. If and , then we can calculate by determining the coordinate vectors and . We need only to row-reduce two matrices: . From these calculations, we can see how to write the -basis vectors in terms of the vectors in , and these form the columns of our change-of-basis matrix: .  We now consider a vector in . We can calculate in this way: . Now that we have , we can use the change-of-basis matrix to find : . We can verify that this is the correct coordinate vector for by calculating it directly: .      We consider the vector space . Let be the standard basis for and let be the set , where . In order to find the change-of-basis matrix, we need to write the coordinate vectors of the basis vectors of with respect to . But since is the standard basis of , this is an easy task to complete. Here is the change-of-basis matrix: .    What we saw in is an indication that some change-of-basis matrices are easier to calculate than others. In particular, when the standard basis is the target (not the source ) basis, the matrix is almost immediate.    Let be the standard basis of , and let be any other basis of . Then the columns of are the vectors of , in order.    If , then column of is . But since is the standard basis, then .    The next lemma also shows that the change-of-basis matrices from one basis to another and back again have the inverse relationship we might expect.    Let and be two bases for a finite-dimensional vector space . Then the relationship between the two change-of-basis matrices is .    Since , by we have . Since is square, this proves that .      We consider two bases for : the standard basis and , where . The reader should verify that is a basis for .   tells us that the change-of-basis matrix is easy to write down: . Then says that , so we can find that matrix without too much difficulty as well: .    The final results of this section deal with linear transformations. This theorem relates the coordinate matrix for a linear transformation to the situation in which we want to change bases in the domain and codomain.    Let and be finite-dimensional vector spaces, and let . Additionally, let and be bases for , and let and be bases for . Then .    We will use : .    The most important (and most common) use of this theorem happens when , , and .    Let and be bases for a finite-dimensional vector space , and let . Then .    This result is due to and .    We will end this section with an example which takes advantage of .    We consider the linear transformation which is reflection across the line . While the action of is not impossible to write down in the usual coordinate system, it is even easier using the alternate basis , where . To see why this linear transformation is easier to describe in the -coordinates, we recall how easy reflection across the -axis is to describe relative to the standard basis simply negate the first coordinate!). The -basis vectors in this case lie on the axis of reflection and along the line perpendicular to that axis.  We note that and that . This shows that the coordinate matrix of with respect to is . (Writing the action of this way makes it especially easy to see that performing this transformation twice puts us back where we started.) We will use to calculate the matrix for relative to the standard basis. That is, we wish to calculate .  We first note that the matrix is, according to , . Then, with the help of , we have .  We can put these together to find : . The action of the transformation, as written in the final line here, is perhaps better understood in words rather than symbols. To reflect across the line , first shift from the standard coordinates to the alternate -coordinates. (This is accomplished by .) In this new coordinate system, the action of is easily described. (Thus, .) After that action is carried out, then we shift back to the standard coordinate system. (That is the work of .) From start to finish, this gives us a matrix which carries out the action of relative to .       Let , , , and . Consider the bases and of .  Find the change-of-basis matrix .     Using the definitions of the vectors and bases from the previous reading question, find .       Let and be bases of , where . Find the change-of-basis matrices and .    Let and be bases of , where . Find the change-of-basis matrices and .    Consider the basis of where .   If is the standard basis for , find and .    Use your work in part (a) to find if .       Let be a basis for , where .   If is the standard basis for , find and .    Use your work in part (a) to find if .       Consider the linear transformation which is projection onto the line .   Propose a basis for where will be easy to determine.    Find .    If is the standard basis for , find and .    Using your work in previous parts of this problem, find .       Consider the linear transformation which is reflection across the line .   Propose a basis for where will be easy to determine.    Find .    If is the standard basis for , find and .    Using your work in previous parts of this problem, find .        "
},
{
  "id": "prop-change-basis",
  "level": "2",
  "url": "sec-change-of-basis.html#prop-change-basis",
  "type": "Proposition",
  "number": "5.6.1",
  "title": "",
  "body": "  Let and be two bases for a finite-dimensional vector space . Then, for any , we have , where is the identity transformation.    This is a simple application of to the identity transformation : .   "
},
{
  "id": "def-change-basis-matrix",
  "level": "2",
  "url": "sec-change-of-basis.html#def-change-basis-matrix",
  "type": "Definition",
  "number": "5.6.2",
  "title": "",
  "body": "  If and are two bases for a finite-dimensional vector space , then the matrix is called the change-of-basis matrix from to .   "
},
{
  "id": "subsec-change-basis-matrix-7",
  "level": "2",
  "url": "sec-change-of-basis.html#subsec-change-basis-matrix-7",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": "  We will continue the example begun earlier in this section. If and , then we can calculate by determining the coordinate vectors and . We need only to row-reduce two matrices: . From these calculations, we can see how to write the -basis vectors in terms of the vectors in , and these form the columns of our change-of-basis matrix: .  We now consider a vector in . We can calculate in this way: . Now that we have , we can use the change-of-basis matrix to find : . We can verify that this is the correct coordinate vector for by calculating it directly: .   "
},
{
  "id": "examp-p2-change-basis-standard",
  "level": "2",
  "url": "sec-change-of-basis.html#examp-p2-change-basis-standard",
  "type": "Example",
  "number": "5.6.4",
  "title": "",
  "body": "  We consider the vector space . Let be the standard basis for and let be the set , where . In order to find the change-of-basis matrix, we need to write the coordinate vectors of the basis vectors of with respect to . But since is the standard basis of , this is an easy task to complete. Here is the change-of-basis matrix: .   "
},
{
  "id": "lem-change-basis-standard",
  "level": "2",
  "url": "sec-change-of-basis.html#lem-change-basis-standard",
  "type": "Lemma",
  "number": "5.6.5",
  "title": "",
  "body": "  Let be the standard basis of , and let be any other basis of . Then the columns of are the vectors of , in order.    If , then column of is . But since is the standard basis, then .   "
},
{
  "id": "lem-inverse-change-matrix",
  "level": "2",
  "url": "sec-change-of-basis.html#lem-inverse-change-matrix",
  "type": "Lemma",
  "number": "5.6.6",
  "title": "",
  "body": "  Let and be two bases for a finite-dimensional vector space . Then the relationship between the two change-of-basis matrices is .    Since , by we have . Since is square, this proves that .   "
},
{
  "id": "subsec-change-basis-matrix-13",
  "level": "2",
  "url": "sec-change-of-basis.html#subsec-change-basis-matrix-13",
  "type": "Example",
  "number": "5.6.7",
  "title": "",
  "body": "  We consider two bases for : the standard basis and , where . The reader should verify that is a basis for .   tells us that the change-of-basis matrix is easy to write down: . Then says that , so we can find that matrix without too much difficulty as well: .   "
},
{
  "id": "thm-lin-tran-change-basis",
  "level": "2",
  "url": "sec-change-of-basis.html#thm-lin-tran-change-basis",
  "type": "Theorem",
  "number": "5.6.8",
  "title": "",
  "body": "  Let and be finite-dimensional vector spaces, and let . Additionally, let and be bases for , and let and be bases for . Then .    We will use : .   "
},
{
  "id": "cor-change-basis-lt",
  "level": "2",
  "url": "sec-change-of-basis.html#cor-change-basis-lt",
  "type": "Corollary",
  "number": "5.6.9",
  "title": "",
  "body": "  Let and be bases for a finite-dimensional vector space , and let . Then .    This result is due to and .   "
},
{
  "id": "examp-change-basis-lt",
  "level": "2",
  "url": "sec-change-of-basis.html#examp-change-basis-lt",
  "type": "Example",
  "number": "5.6.10",
  "title": "",
  "body": "  We consider the linear transformation which is reflection across the line . While the action of is not impossible to write down in the usual coordinate system, it is even easier using the alternate basis , where . To see why this linear transformation is easier to describe in the -coordinates, we recall how easy reflection across the -axis is to describe relative to the standard basis simply negate the first coordinate!). The -basis vectors in this case lie on the axis of reflection and along the line perpendicular to that axis.  We note that and that . This shows that the coordinate matrix of with respect to is . (Writing the action of this way makes it especially easy to see that performing this transformation twice puts us back where we started.) We will use to calculate the matrix for relative to the standard basis. That is, we wish to calculate .  We first note that the matrix is, according to , . Then, with the help of , we have .  We can put these together to find : . The action of the transformation, as written in the final line here, is perhaps better understood in words rather than symbols. To reflect across the line , first shift from the standard coordinates to the alternate -coordinates. (This is accomplished by .) In this new coordinate system, the action of is easily described. (Thus, .) After that action is carried out, then we shift back to the standard coordinate system. (That is the work of .) From start to finish, this gives us a matrix which carries out the action of relative to .   "
},
{
  "id": "sec-change-of-basis-4-1",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-4-1",
  "type": "Reading Question",
  "number": "5.6.2.1",
  "title": "",
  "body": " Let , , , and . Consider the bases and of .  Find the change-of-basis matrix .   "
},
{
  "id": "sec-change-of-basis-4-2",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-4-2",
  "type": "Reading Question",
  "number": "5.6.2.2",
  "title": "",
  "body": " Using the definitions of the vectors and bases from the previous reading question, find .   "
},
{
  "id": "sec-change-of-basis-5-1",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-5-1",
  "type": "Exercise",
  "number": "5.6.3.1",
  "title": "",
  "body": " Let and be bases of , where . Find the change-of-basis matrices and .  "
},
{
  "id": "sec-change-of-basis-5-2",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-5-2",
  "type": "Exercise",
  "number": "5.6.3.2",
  "title": "",
  "body": " Let and be bases of , where . Find the change-of-basis matrices and .  "
},
{
  "id": "sec-change-of-basis-5-3",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-5-3",
  "type": "Exercise",
  "number": "5.6.3.3",
  "title": "",
  "body": " Consider the basis of where .   If is the standard basis for , find and .    Use your work in part (a) to find if .     "
},
{
  "id": "sec-change-of-basis-5-4",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-5-4",
  "type": "Exercise",
  "number": "5.6.3.4",
  "title": "",
  "body": " Let be a basis for , where .   If is the standard basis for , find and .    Use your work in part (a) to find if .     "
},
{
  "id": "sec-change-of-basis-5-5",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-5-5",
  "type": "Exercise",
  "number": "5.6.3.5",
  "title": "",
  "body": " Consider the linear transformation which is projection onto the line .   Propose a basis for where will be easy to determine.    Find .    If is the standard basis for , find and .    Using your work in previous parts of this problem, find .     "
},
{
  "id": "sec-change-of-basis-5-6",
  "level": "2",
  "url": "sec-change-of-basis.html#sec-change-of-basis-5-6",
  "type": "Exercise",
  "number": "5.6.3.6",
  "title": "",
  "body": " Consider the linear transformation which is reflection across the line .   Propose a basis for where will be easy to determine.    Find .    If is the standard basis for , find and .    Using your work in previous parts of this problem, find .     "
},
{
  "id": "sec-eigenvalues",
  "level": "1",
  "url": "sec-eigenvalues.html",
  "type": "Section",
  "number": "6.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors   For linear transformations , there isn't often a connection between and that is easy to describe. These vectors, after all, live in different vector spaces, so they need not have any obvious relationship to each other. When , sometimes we have a different story for some vectors.  For a transformation , and live in the same space, so there can occasionally be an easy-to-define relationship between these two vectors. Sometimes, the action of on a vector turns out to be rather simple.    Defining Eigenvalues and Eigenvectors  We first define the sorts of vectors we alluded to in the previous paragraphs.    Let be a vector space over , and let . A nonzero vector is an eigenvector for if for some . A scalar is called an eigenvalue of if there is a nontrivial solution to the equation . Such a solution is called an eigenvector for corresponding to .  If , the eigenvectors and eigenvalues of are the eigenvectors and eigenvalues of the transformation defined by .    Informally, eigenvectors for are nonzero vectors on which acts by simple scalar multiplication. The next example shows that for a that has eigenvectors, it is not (always) every vector in that has this special property.    When we are given a matrix and a vector , it is easy to determine whether or not is an eigenvector for . Consider the following: . We take the product , . Since , is an eigenvector for with eigenvalue . Also, since , we can say that is not an eigenvector for , because is not a scalar multiple of .    When is an eigenvector of , then applying may change the length of but it will not change the direction of . (To say this we must include pointing in the exact opposite direction as being in the same direction.) This is a simplification, because not every vector space has a neat, geometric interpretation.    Let be the following linear transformation: . If , it is not difficult to check that . Therefore, is an eigenvector for with eigenvalue .      Let be the linear transformation which is counterclockwise rotation about the origin by an angle of . We can see that will have an eigenvector if and only if is an integer multiple of radians. If is an even integer multiple of , then every vector in is an eigenvector for with eigenvalue , and if is an odd integer multiple of , then every vector in is an eigenvector for with eigenvalue .    We take a slightly different approach in this next example. Instead of verifying that a vector is an eigenvector, we provide the eigenvalue and then search for the eigenvector(s).    We consider the matrix from . Let's show that is an eigenvalue of and find the corresponding eigenvectors.  We know that is an eigenvalue of if the equation has a nontrivial solution for some . This is equivalent to saying that the equation has a nontrivial solution. We can also view as , so if is an eigenvalue of , there is a nonzero vector which satisfies . Viewed from the correct angle, we have reduced this problem to finding the null space of a matrix.  We will calculate : . We can see that the columns of are linearly dependent, so we know that has nontrivial solutions. This proves that is an eigenvalue of .  In order to find the eigenvectors of that correspond to , we describe the null space of the appropriate matrix. We row-reduce : . This shows that every eigenvector of has the form , as long as . The interested\/vigilant reader can check that, for example, .    The process we undertook in the previous example showed that there are almost always multiple eigenvectors for a linear transformation which correspond to a specific eigenvalue. In fact, the collection of such vectors forms almost an entire subspace.    Let be a vector space over , let , and let be an eigenvalue of . Then the set of all eigenvectors for corresponding to , along with the zero vector, is a subspace of .    We note that a nonzero vector is an eigenvector for corresponding to if and only if . The vector satisfies this equation if and only if , which is true exactly when . This shows that a nonzero is an eigenvector for corresponding to if and only if .  Since we already know ( ) that the kernel of a linear transformation is a subspace, this completes the proof of this theorem.     The awkwardness in the statement of this theorem regarding the zero vector is only present because the zero vector (by definition) cannot be an eigenvector.   This previous theorem justifies the following definition.    Let be a vector space and let . If is an eigenvalue of , then the eigenspace of corresponding to is the subspace of defined by . We will sometimes refer to the eigenspace corresponding to as the -eigenspace .    In the following example, we will calculate the eigenspace corresponding to an eigenvalue.    We consider the following matrix : . Let be multiplication by . If we know that is an eigenvalue for , we can calculate a basis for .  We need to form the matrix and then find the RREF: . The presence of free variables here confirms that is an eigenvalue of . If , then . From this calculation we can see that is two-dimensional, with basis , where .      Results About Eigenvalues and Eigenvectors  In general, the eigenvalues of a linear transformation are not easy to spot. There are some situations, however, when we can identify eigenvalues at a glance.    The eigenvalues of a triangular matrix are the entries on the main diagonal of .    Suppose is an upper triangular matrix. Then is . We can see that is an eigenvalue for if and only if , and this happens if and only if has at least one non-pivot column. Because (and therefore ) is upper triangular, has at least one non-pivot column if and only if at least one of the entries on the main diagonal of is zero. This happens if and only if equals one of the entries on the main diagonal of .  We have saved the case of a lower triangular matrix for the exercises.      If is given by , the eigenvalues of are , , and . The reader might use this opportunity to find the associated eigenvectors!    Of all possible scalars , it is especially noteworthy when is an eigenvalue for . In this situation, there is a nonzero vector such that . In other words, is a nonzero vector in .  This short argument establishes a connection between the injectivity of and the presence of as an eigenvalue for . Because of previous results, we have the following theorem. (We leave the proof of both statements in this theorem as exercises so the reader might get practice connecting the logic of various chapters of the book.)    Suppose is a finite dimensional vector space and . Then is an eigenvalue of if and only if is not invertible.  If , then is an eigenvalue of if and only if is not invertible.    The final result in this section will be useful later, but we have all of the tools we need to prove it now.    Suppose that are eigenvectors of corresponding to distinct eigenvalues . Then the set is linearly independent.    We argue by contradiction. Suppose that the set is linearly dependent. Since (because eigenvectors cannot be ), we can apply the Linear Dependence Lemma ( ). Therefore, there is some such that . There may be multiple subscripts for which this is true; we use the smallest such . We therefore have , for scalars .  We now apply to both sides of this equation and use the eigenvector assumptions (as well as the linearity of ) to get . If we multiply both sides of by and subtract the result from , we get .  Since is linearly independent by assumption, we must have for each , . But we assumed that the eigenvalues are all distinct, so this means that for all , and therefore we must have for all . But this implies, from , that , which is a contradiction as cannot be an eigenvector.  This contradiction proves that must be linearly independent.       Consider the following matrix and the vectors : .   Is an eigenvector for ? How do you know?     Is an eigenvector for ? How do you know?        Consider the matrix from the previous reading question. Show that is an eigenvalue of and find the corresponding eigenvectors. Follow .  Eigenspace is .      Let be the matrix .   Is an eigenvector for ? If so, find the eigenvalue.    Is an eigenvector for ? If so, find the eigenvalue.       Let be the matrix .   Is an eigenvalue for ? If so, find at least one eigenvector.    Is an eigenvalue for ? If so, find at least one eigenvector.       Let be the following matrix .   Show that is an eigenvalue for and find a basis for .    Show that is an eigenvalue for and find a basis for .       Let be the following matrix .   Show that is an eigenvalue for and find a basis for .    Show that is an eigenvalue for and find a basis for .       Let be the following matrix .   Show that is an eigenvalue for and find a basis for .    Show that is an eigenvalue for and find a basis for .       Let be the following matrix: . Find one eigenvalue of without any calculation. Explain your reasoning.    Prove that if is the zero matrix, then the only eigenvalue of is 0.    Prove that an matrix can have at most distinct eigenvalues.    If is an eigenvalue for an invertible linear transformation , prove that is an eigenvalue for .       Let be an matrix. Prove that is an eigenvalue for if and only if is an eigenvalue for . (Hint: Figure out how and are related.)    Use part (a) to complete the proof of for lower triangular matrices.       In a matrix, a row sum refers to the sum of all of the entries in a particular row.  Let be an matrix where all of the row sums are equal to the same number . Show that is an eigenvalue of . (Hint: Find an eigenvector.)    Let be the linear transformation which is orthogonal projection onto the line . Find all eigenvalues and all eigenvectors of this transformation.    Let be the linear transformation which is reflection across the -plane. Find all eigenvalues and all eigenvectors of this transformation.    Let be the matrix with the number 1 in every entry. Find all eigenvalues and eigenvectors for .    Suppose that and that for each , is an eigenvector of . Prove that is a diagonal matrix.       Suppose that is an eigenvalue of and that . Prove that is an eigenvalue of and that . (Here means the composition of with itself times.)    Give an example of a linear transformation with an eigenvalue such that .       Complete the proof of both halves of .    "
},
{
  "id": "def-eigenvalues",
  "level": "2",
  "url": "sec-eigenvalues.html#def-eigenvalues",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  Let be a vector space over , and let . A nonzero vector is an eigenvector for if for some . A scalar is called an eigenvalue of if there is a nontrivial solution to the equation . Such a solution is called an eigenvector for corresponding to .  If , the eigenvectors and eigenvalues of are the eigenvectors and eigenvalues of the transformation defined by .   "
},
{
  "id": "examp-first-eigen",
  "level": "2",
  "url": "sec-eigenvalues.html#examp-first-eigen",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  When we are given a matrix and a vector , it is easy to determine whether or not is an eigenvector for . Consider the following: . We take the product , . Since , is an eigenvector for with eigenvalue . Also, since , we can say that is not an eigenvector for , because is not a scalar multiple of .   "
},
{
  "id": "subsec-eigenvalues-7",
  "level": "2",
  "url": "sec-eigenvalues.html#subsec-eigenvalues-7",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  Let be the following linear transformation: . If , it is not difficult to check that . Therefore, is an eigenvector for with eigenvalue .   "
},
{
  "id": "subsec-eigenvalues-8",
  "level": "2",
  "url": "sec-eigenvalues.html#subsec-eigenvalues-8",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": "  Let be the linear transformation which is counterclockwise rotation about the origin by an angle of . We can see that will have an eigenvector if and only if is an integer multiple of radians. If is an even integer multiple of , then every vector in is an eigenvector for with eigenvalue , and if is an odd integer multiple of , then every vector in is an eigenvector for with eigenvalue .   "
},
{
  "id": "examp-find-evectors",
  "level": "2",
  "url": "sec-eigenvalues.html#examp-find-evectors",
  "type": "Example",
  "number": "6.1.5",
  "title": "",
  "body": "  We consider the matrix from . Let's show that is an eigenvalue of and find the corresponding eigenvectors.  We know that is an eigenvalue of if the equation has a nontrivial solution for some . This is equivalent to saying that the equation has a nontrivial solution. We can also view as , so if is an eigenvalue of , there is a nonzero vector which satisfies . Viewed from the correct angle, we have reduced this problem to finding the null space of a matrix.  We will calculate : . We can see that the columns of are linearly dependent, so we know that has nontrivial solutions. This proves that is an eigenvalue of .  In order to find the eigenvectors of that correspond to , we describe the null space of the appropriate matrix. We row-reduce : . This shows that every eigenvector of has the form , as long as . The interested\/vigilant reader can check that, for example, .   "
},
{
  "id": "thm-eigenspace",
  "level": "2",
  "url": "sec-eigenvalues.html#thm-eigenspace",
  "type": "Theorem",
  "number": "6.1.6",
  "title": "",
  "body": "  Let be a vector space over , let , and let be an eigenvalue of . Then the set of all eigenvectors for corresponding to , along with the zero vector, is a subspace of .    We note that a nonzero vector is an eigenvector for corresponding to if and only if . The vector satisfies this equation if and only if , which is true exactly when . This shows that a nonzero is an eigenvector for corresponding to if and only if .  Since we already know ( ) that the kernel of a linear transformation is a subspace, this completes the proof of this theorem.   "
},
{
  "id": "subsec-eigenvalues-13",
  "level": "2",
  "url": "sec-eigenvalues.html#subsec-eigenvalues-13",
  "type": "Note",
  "number": "6.1.7",
  "title": "",
  "body": " The awkwardness in the statement of this theorem regarding the zero vector is only present because the zero vector (by definition) cannot be an eigenvector.  "
},
{
  "id": "def-eigenspace",
  "level": "2",
  "url": "sec-eigenvalues.html#def-eigenspace",
  "type": "Definition",
  "number": "6.1.8",
  "title": "",
  "body": "  Let be a vector space and let . If is an eigenvalue of , then the eigenspace of corresponding to is the subspace of defined by . We will sometimes refer to the eigenspace corresponding to as the -eigenspace .   "
},
{
  "id": "examp-evalues1",
  "level": "2",
  "url": "sec-eigenvalues.html#examp-evalues1",
  "type": "Example",
  "number": "6.1.9",
  "title": "",
  "body": "  We consider the following matrix : . Let be multiplication by . If we know that is an eigenvalue for , we can calculate a basis for .  We need to form the matrix and then find the RREF: . The presence of free variables here confirms that is an eigenvalue of . If , then . From this calculation we can see that is two-dimensional, with basis , where .   "
},
{
  "id": "thm-evalues-triangular",
  "level": "2",
  "url": "sec-eigenvalues.html#thm-evalues-triangular",
  "type": "Theorem",
  "number": "6.1.10",
  "title": "",
  "body": "  The eigenvalues of a triangular matrix are the entries on the main diagonal of .    Suppose is an upper triangular matrix. Then is . We can see that is an eigenvalue for if and only if , and this happens if and only if has at least one non-pivot column. Because (and therefore ) is upper triangular, has at least one non-pivot column if and only if at least one of the entries on the main diagonal of is zero. This happens if and only if equals one of the entries on the main diagonal of .  We have saved the case of a lower triangular matrix for the exercises.   "
},
{
  "id": "subsec-results-eigenvectors-4",
  "level": "2",
  "url": "sec-eigenvalues.html#subsec-results-eigenvectors-4",
  "type": "Example",
  "number": "6.1.11",
  "title": "",
  "body": "  If is given by , the eigenvalues of are , , and . The reader might use this opportunity to find the associated eigenvectors!   "
},
{
  "id": "thm-invertible-0-evalue",
  "level": "2",
  "url": "sec-eigenvalues.html#thm-invertible-0-evalue",
  "type": "Theorem",
  "number": "6.1.12",
  "title": "",
  "body": "  Suppose is a finite dimensional vector space and . Then is an eigenvalue of if and only if is not invertible.  If , then is an eigenvalue of if and only if is not invertible.   "
},
{
  "id": "thm-lin-ind-eigenvectors",
  "level": "2",
  "url": "sec-eigenvalues.html#thm-lin-ind-eigenvectors",
  "type": "Theorem",
  "number": "6.1.13",
  "title": "",
  "body": "  Suppose that are eigenvectors of corresponding to distinct eigenvalues . Then the set is linearly independent.    We argue by contradiction. Suppose that the set is linearly dependent. Since (because eigenvectors cannot be ), we can apply the Linear Dependence Lemma ( ). Therefore, there is some such that . There may be multiple subscripts for which this is true; we use the smallest such . We therefore have , for scalars .  We now apply to both sides of this equation and use the eigenvector assumptions (as well as the linearity of ) to get . If we multiply both sides of by and subtract the result from , we get .  Since is linearly independent by assumption, we must have for each , . But we assumed that the eigenvalues are all distinct, so this means that for all , and therefore we must have for all . But this implies, from , that , which is a contradiction as cannot be an eigenvector.  This contradiction proves that must be linearly independent.   "
},
{
  "id": "rq1-sec61",
  "level": "2",
  "url": "sec-eigenvalues.html#rq1-sec61",
  "type": "Reading Question",
  "number": "6.1.3.1",
  "title": "",
  "body": " Consider the following matrix and the vectors : .   Is an eigenvector for ? How do you know?     Is an eigenvector for ? How do you know?      "
},
{
  "id": "sec-eigenvalues-5-2",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-5-2",
  "type": "Reading Question",
  "number": "6.1.3.2",
  "title": "",
  "body": " Consider the matrix from the previous reading question. Show that is an eigenvalue of and find the corresponding eigenvectors. Follow .  Eigenspace is .  "
},
{
  "id": "sec-eigenvalues-6-1",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-1",
  "type": "Exercise",
  "number": "6.1.4.1",
  "title": "",
  "body": " Let be the matrix .   Is an eigenvector for ? If so, find the eigenvalue.    Is an eigenvector for ? If so, find the eigenvalue.     "
},
{
  "id": "sec-eigenvalues-6-2",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-2",
  "type": "Exercise",
  "number": "6.1.4.2",
  "title": "",
  "body": " Let be the matrix .   Is an eigenvalue for ? If so, find at least one eigenvector.    Is an eigenvalue for ? If so, find at least one eigenvector.     "
},
{
  "id": "sec-eigenvalues-6-3",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-3",
  "type": "Exercise",
  "number": "6.1.4.3",
  "title": "",
  "body": " Let be the following matrix .   Show that is an eigenvalue for and find a basis for .    Show that is an eigenvalue for and find a basis for .     "
},
{
  "id": "sec-eigenvalues-6-4",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-4",
  "type": "Exercise",
  "number": "6.1.4.4",
  "title": "",
  "body": " Let be the following matrix .   Show that is an eigenvalue for and find a basis for .    Show that is an eigenvalue for and find a basis for .     "
},
{
  "id": "sec-eigenvalues-6-5",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-5",
  "type": "Exercise",
  "number": "6.1.4.5",
  "title": "",
  "body": " Let be the following matrix .   Show that is an eigenvalue for and find a basis for .    Show that is an eigenvalue for and find a basis for .     "
},
{
  "id": "sec-eigenvalues-6-6",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-6",
  "type": "Exercise",
  "number": "6.1.4.6",
  "title": "",
  "body": " Let be the following matrix: . Find one eigenvalue of without any calculation. Explain your reasoning.  "
},
{
  "id": "sec-eigenvalues-6-7",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-7",
  "type": "Exercise",
  "number": "6.1.4.7",
  "title": "",
  "body": " Prove that if is the zero matrix, then the only eigenvalue of is 0.  "
},
{
  "id": "sec-eigenvalues-6-8",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-8",
  "type": "Exercise",
  "number": "6.1.4.8",
  "title": "",
  "body": " Prove that an matrix can have at most distinct eigenvalues.  "
},
{
  "id": "sec-eigenvalues-6-9",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-9",
  "type": "Exercise",
  "number": "6.1.4.9",
  "title": "",
  "body": " If is an eigenvalue for an invertible linear transformation , prove that is an eigenvalue for .  "
},
{
  "id": "sec-eigenvalues-6-10",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-10",
  "type": "Exercise",
  "number": "6.1.4.10",
  "title": "",
  "body": "    Let be an matrix. Prove that is an eigenvalue for if and only if is an eigenvalue for . (Hint: Figure out how and are related.)    Use part (a) to complete the proof of for lower triangular matrices.     "
},
{
  "id": "sec-eigenvalues-6-11",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-11",
  "type": "Exercise",
  "number": "6.1.4.11",
  "title": "",
  "body": " In a matrix, a row sum refers to the sum of all of the entries in a particular row.  Let be an matrix where all of the row sums are equal to the same number . Show that is an eigenvalue of . (Hint: Find an eigenvector.)  "
},
{
  "id": "sec-eigenvalues-6-12",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-12",
  "type": "Exercise",
  "number": "6.1.4.12",
  "title": "",
  "body": " Let be the linear transformation which is orthogonal projection onto the line . Find all eigenvalues and all eigenvectors of this transformation.  "
},
{
  "id": "sec-eigenvalues-6-13",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-13",
  "type": "Exercise",
  "number": "6.1.4.13",
  "title": "",
  "body": " Let be the linear transformation which is reflection across the -plane. Find all eigenvalues and all eigenvectors of this transformation.  "
},
{
  "id": "sec-eigenvalues-6-14",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-14",
  "type": "Exercise",
  "number": "6.1.4.14",
  "title": "",
  "body": " Let be the matrix with the number 1 in every entry. Find all eigenvalues and eigenvectors for .  "
},
{
  "id": "sec-eigenvalues-6-15",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-15",
  "type": "Exercise",
  "number": "6.1.4.15",
  "title": "",
  "body": " Suppose that and that for each , is an eigenvector of . Prove that is a diagonal matrix.  "
},
{
  "id": "sec-eigenvalues-6-16",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-16",
  "type": "Exercise",
  "number": "6.1.4.16",
  "title": "",
  "body": "    Suppose that is an eigenvalue of and that . Prove that is an eigenvalue of and that . (Here means the composition of with itself times.)    Give an example of a linear transformation with an eigenvalue such that .     "
},
{
  "id": "sec-eigenvalues-6-17",
  "level": "2",
  "url": "sec-eigenvalues.html#sec-eigenvalues-6-17",
  "type": "Exercise",
  "number": "6.1.4.17",
  "title": "",
  "body": " Complete the proof of both halves of .  "
},
{
  "id": "sec-char-eqn",
  "level": "1",
  "url": "sec-char-eqn.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Characteristic Equation",
  "body": " The Characteristic Equation   In the previous section we were able to check whether or not a given vector (scalar) was an eigenvector (eigenvalue) for a matrix . What was missing was a process for finding the eigenvalues and eigenvectors for a matrix from scratch. This section will outline such a process. (Once we find the eigenvalues, we can use the method of to find bases for the eigenspaces.)    How to Find Eigenvalues  We recall from that a scalar is an eigenvalue for a matrix if there is a nontrivial solution to the equation . Since this happens precisely when is not invertible, by we can use the determinant to find the eigenvalues for .  Specifically, is an eigenvalue for if and only if . If we introduce as a variable, we can begin the process of finding the eigenvalues for square matrices. We will illustrate this method in the following example before making all of the steps explicit (with the appropriate notation and terminology).    Let be the following matrix: . A scalar is an eigenvalue for if and only if . Since is , we can find the determinant with ease: . With some algebra, we can see that . Since is an eigenvalue when , we see that the eigenvalues of are and .  Let's verify this method by showing that and are eigenvalues for and finding bases for their eigenspaces. First, if , then . From this we see that is one-dimensional with basis .  Now, when , we have . Thus is also one-dimensional with basis .    We now give some names and notation to the elements of this method to find the eigenvalues of a matrix.    If , then is called the characteristic equation of .    Based on our previous discussion, we can say that is an eigenvalue of if and only if satisfies the characteristic equation of .  It is occasionally useful to have a term and notation for just one piece of the characteristic equation.    For a matrix , is a degree polynomial referred to as the characteristic polynomial of . Sometimes the notation is used for this polynomial.    We will see that the characteristic equation can get quite difficult to solve as the size of the matrix increases. The next example provides a glimpse of this for a matrix.    Let be the following matrix: . To find the characteristic polynomial of , we will use cofactor expansion along the first row of : . For the matrix given above, we have .    Since we can solve a quadratic equation easily either by factoring or using the quadratic formula we mistakenly think that all polynomial equations are easy to solve. Not so. As we consider the characteristic polynomial for the matrix in the previous example, we find the task of finding the eigenvalues quite challenging.  While there is a formula for solving a cubic polynomial, it is not nearly as nice as the quadratic formula. It is, in fact, something that should rarely see the light of day. It is ugly.  In practice, the eigenvalues of an matrix are usually found with a computer algebra system when . However, there is one way that we could describe an eigenvalue problem and still have a reasonable expectation that the reader could find a solution.    Consider the following matrix (from the previous example): . If we know that is an eigenvalue for , we can find all of the eigenvalues.  Our previous work showed that . If we know that is an eigenvalue, that means that must be a factor of this polynomial. Using long division of polynomials, we can complete the factorization: . This shows that the eigenvalues for are .    When a characteristic polynomial is factored to reveal the eigenvalues, we might see some of those eigenvalues repeated. We now introduce a term to describe this repetition.    The multiplicity of an eigenvalue is the number of times it appears as a root of the characteristic polynomial for a matrix. Sometimes this is referred to as the algebraic multiplicity of an eigenvalue.      We consider the matrix from in the previous section: . The characteristic polynomial for this matrix is . From this we see that has an eigenvalue of 2 with multiplicity 2 and an eigenvalue of with multiplicity 1.    Before we move to the second half of this section, we point out that not every matrix over has eigenvalues in . The following example illustrates this, but we can understand this intuitively by recognizing that (for example) not every polynomial over can be completely factored into linear terms.    Let be the following matrix: . We can calculate the characteristic polynomial for : . This quadratic polynomial has no real roots, as the reader can check by verifying that the discriminant (the expression under the square root in the quadratic formula) is negative.  If is considered as a matrix over , then it has two complex eigenvalues. But it has no real eigenvalues.    One of the major differences between and is that is an algebraically closed field , while is not. The fact that is algebraically closed is another way to restate the famous Fundamental Theorem of Algebra, which says that every polynomial with coefficients in can be completely reduced to linear factors. There are interesting, deep waters to explore here, but perhaps not in the present text.    Similarity  Earlier in this book we have discussed one way that matrices can be related row equivalence. We now introduce another way they can be related which has connections to the characteristic equation.    Suppose that . Then  is similar to  if there exists an invertible matrix such that or .     Since we could write in the previous definition and have when , we see that is similar to when is similar to . For this reason, we can say that and are similar .   The next theorem presents one of the most compelling reasons for studying similarity in matrices.    If matrices are similar, then they have the same characteristic polynomials and therefore the same eigenvalues (with the same multiplicities).    If and are similar, then there exists an invertible matrix such that . When forming , we have . Since the determinant is multiplicative ( ), we have . This shows that and have the same characteristic polynomials.    The next example showcases two similar matrices.    Let and be the following matrices over : . We will show that these are similar matrices by considering the matrix : . The reader can check that is invertible and that . This shows that and are similar.  Further calculation shows that and that this is the same as .    It is important to note the direction of logical implication that provides. If two matrices are similar, then they have the same eigenvalues. However, we may have two matrices with the same eigenvalues which are not similar.    Let be the following matrices: . Since both and are triangular matrices, we can see that they have the same eigenvalues (with the same multiplicity). However, these matrices are not similar. In fact, we will show in the exercises that a matrix , for , is only similar to itself. In this example, .    We end this section with a small note of caution. Similarity and row equivalence are not the same thing, and the distinction between these two relations is important to keep in mind. In particular, elementary row operations usually alter the eigenvalues of a matrix, while we have seen that a similarity transformation does not.     Let be the following matrix over : .   Write down the characteristic equation for . (Feel free to use instead of if typing is difficult.)     Determine the two eigenvalues for .        Consider the matrix from the previous reading question. Write down two separate matrices which are similar to . Explain how you obtained these matrices.       Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .    Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .    Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .    Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .    Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .    Let be the following matrix: . Find the characteristic polynomial of . If is an eigenvalue of , find the other eigenvalues of .    Let have real eigenvalues, , repeated according to their multiplicities, so that . Prove that is the product of the eigenvalues of .    Prove that similarity is an equivalence relation on the set .    Let be the identity matrix and let be a scalar. If , prove that the only matrix is similar to is itself.    Prove that if and are similar, then .    "
},
{
  "id": "subsec-char-eqn-4",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-char-eqn-4",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": "  Let be the following matrix: . A scalar is an eigenvalue for if and only if . Since is , we can find the determinant with ease: . With some algebra, we can see that . Since is an eigenvalue when , we see that the eigenvalues of are and .  Let's verify this method by showing that and are eigenvalues for and finding bases for their eigenspaces. First, if , then . From this we see that is one-dimensional with basis .  Now, when , we have . Thus is also one-dimensional with basis .   "
},
{
  "id": "def-char-eqn",
  "level": "2",
  "url": "sec-char-eqn.html#def-char-eqn",
  "type": "Definition",
  "number": "6.2.2",
  "title": "",
  "body": "  If , then is called the characteristic equation of .   "
},
{
  "id": "def-char-poly",
  "level": "2",
  "url": "sec-char-eqn.html#def-char-poly",
  "type": "Definition",
  "number": "6.2.3",
  "title": "",
  "body": "  For a matrix , is a degree polynomial referred to as the characteristic polynomial of . Sometimes the notation is used for this polynomial.   "
},
{
  "id": "subsec-char-eqn-11",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-char-eqn-11",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": "  Let be the following matrix: . To find the characteristic polynomial of , we will use cofactor expansion along the first row of : . For the matrix given above, we have .   "
},
{
  "id": "subsec-char-eqn-15",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-char-eqn-15",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  Consider the following matrix (from the previous example): . If we know that is an eigenvalue for , we can find all of the eigenvalues.  Our previous work showed that . If we know that is an eigenvalue, that means that must be a factor of this polynomial. Using long division of polynomials, we can complete the factorization: . This shows that the eigenvalues for are .   "
},
{
  "id": "def-multiplicity",
  "level": "2",
  "url": "sec-char-eqn.html#def-multiplicity",
  "type": "Definition",
  "number": "6.2.6",
  "title": "",
  "body": "  The multiplicity of an eigenvalue is the number of times it appears as a root of the characteristic polynomial for a matrix. Sometimes this is referred to as the algebraic multiplicity of an eigenvalue.   "
},
{
  "id": "subsec-char-eqn-18",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-char-eqn-18",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  We consider the matrix from in the previous section: . The characteristic polynomial for this matrix is . From this we see that has an eigenvalue of 2 with multiplicity 2 and an eigenvalue of with multiplicity 1.   "
},
{
  "id": "subsec-char-eqn-20",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-char-eqn-20",
  "type": "Example",
  "number": "6.2.8",
  "title": "",
  "body": "  Let be the following matrix: . We can calculate the characteristic polynomial for : . This quadratic polynomial has no real roots, as the reader can check by verifying that the discriminant (the expression under the square root in the quadratic formula) is negative.  If is considered as a matrix over , then it has two complex eigenvalues. But it has no real eigenvalues.   "
},
{
  "id": "subsec-char-eqn-21",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-char-eqn-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraically closed field "
},
{
  "id": "def-similarity",
  "level": "2",
  "url": "sec-char-eqn.html#def-similarity",
  "type": "Definition",
  "number": "6.2.9",
  "title": "",
  "body": "  Suppose that . Then  is similar to  if there exists an invertible matrix such that or .   "
},
{
  "id": "subsec-similarity-4",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-similarity-4",
  "type": "Note",
  "number": "6.2.10",
  "title": "",
  "body": " Since we could write in the previous definition and have when , we see that is similar to when is similar to . For this reason, we can say that and are similar .  "
},
{
  "id": "thm-similar-matrices-char-poly",
  "level": "2",
  "url": "sec-char-eqn.html#thm-similar-matrices-char-poly",
  "type": "Theorem",
  "number": "6.2.11",
  "title": "",
  "body": "  If matrices are similar, then they have the same characteristic polynomials and therefore the same eigenvalues (with the same multiplicities).    If and are similar, then there exists an invertible matrix such that . When forming , we have . Since the determinant is multiplicative ( ), we have . This shows that and have the same characteristic polynomials.   "
},
{
  "id": "subsec-similarity-8",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-similarity-8",
  "type": "Example",
  "number": "6.2.12",
  "title": "",
  "body": "  Let and be the following matrices over : . We will show that these are similar matrices by considering the matrix : . The reader can check that is invertible and that . This shows that and are similar.  Further calculation shows that and that this is the same as .   "
},
{
  "id": "subsec-similarity-10",
  "level": "2",
  "url": "sec-char-eqn.html#subsec-similarity-10",
  "type": "Example",
  "number": "6.2.13",
  "title": "",
  "body": "  Let be the following matrices: . Since both and are triangular matrices, we can see that they have the same eigenvalues (with the same multiplicity). However, these matrices are not similar. In fact, we will show in the exercises that a matrix , for , is only similar to itself. In this example, .   "
},
{
  "id": "sec-char-eqn-5-1",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-5-1",
  "type": "Reading Question",
  "number": "6.2.3.1",
  "title": "",
  "body": " Let be the following matrix over : .   Write down the characteristic equation for . (Feel free to use instead of if typing is difficult.)     Determine the two eigenvalues for .      "
},
{
  "id": "sec-char-eqn-5-2",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-5-2",
  "type": "Reading Question",
  "number": "6.2.3.2",
  "title": "",
  "body": " Consider the matrix from the previous reading question. Write down two separate matrices which are similar to . Explain how you obtained these matrices.   "
},
{
  "id": "sec-char-eqn-6-1",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-1",
  "type": "Exercise",
  "number": "6.2.4.1",
  "title": "",
  "body": " Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .  "
},
{
  "id": "sec-char-eqn-6-2",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-2",
  "type": "Exercise",
  "number": "6.2.4.2",
  "title": "",
  "body": " Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .  "
},
{
  "id": "sec-char-eqn-6-3",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-3",
  "type": "Exercise",
  "number": "6.2.4.3",
  "title": "",
  "body": " Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .  "
},
{
  "id": "sec-char-eqn-6-4",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-4",
  "type": "Exercise",
  "number": "6.2.4.4",
  "title": "",
  "body": " Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .  "
},
{
  "id": "sec-char-eqn-6-5",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-5",
  "type": "Exercise",
  "number": "6.2.4.5",
  "title": "",
  "body": " Let be the following matrix: . Find the characteristic polynomial and the eigenvalues of .  "
},
{
  "id": "sec-char-eqn-6-6",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-6",
  "type": "Exercise",
  "number": "6.2.4.6",
  "title": "",
  "body": " Let be the following matrix: . Find the characteristic polynomial of . If is an eigenvalue of , find the other eigenvalues of .  "
},
{
  "id": "sec-char-eqn-6-7",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-7",
  "type": "Exercise",
  "number": "6.2.4.7",
  "title": "",
  "body": " Let have real eigenvalues, , repeated according to their multiplicities, so that . Prove that is the product of the eigenvalues of .  "
},
{
  "id": "exerc-similarity-equiv-rel",
  "level": "2",
  "url": "sec-char-eqn.html#exerc-similarity-equiv-rel",
  "type": "Exercise",
  "number": "6.2.4.8",
  "title": "",
  "body": " Prove that similarity is an equivalence relation on the set .  "
},
{
  "id": "sec-char-eqn-6-9",
  "level": "2",
  "url": "sec-char-eqn.html#sec-char-eqn-6-9",
  "type": "Exercise",
  "number": "6.2.4.9",
  "title": "",
  "body": " Let be the identity matrix and let be a scalar. If , prove that the only matrix is similar to is itself.  "
},
{
  "id": "exer-det-invariant-similar",
  "level": "2",
  "url": "sec-char-eqn.html#exer-det-invariant-similar",
  "type": "Exercise",
  "number": "6.2.4.10",
  "title": "",
  "body": " Prove that if and are similar, then .  "
},
{
  "id": "sec-diagonalization",
  "level": "1",
  "url": "sec-diagonalization.html",
  "type": "Section",
  "number": "6.3",
  "title": "Diagonalization",
  "body": " Diagonalization   An matrix often has a huge number of matrices to which it is similar. In this section, we will focus on matrices that are similar to diagonal matrices, and we do so because of how straightforward the action of a diagonal matrix is.    Diagonalizable Matrices  If is similar to a diagonal matrix , then for some invertible matrix . Such a factorization of encodes much of the information about the eigenvalues and eigenvectors of , and it also allows us to raise to integer powers rather easily.  If is diagonal, then powers of are easy to compute. Consider the following matrices and : . In general, the zeros in a diagonal matrix make the powers of that matrix easy to calculate. For this specific , we have, for any integer , . Given the number of calculations that are usually involved in matrix multiplication, this is a huge savings in computing time.  Now, if is similar to a diagonal matrix , we find related behavior. Suppose that . Then . Since can be written as , we have . This holds for any : .  Perhaps we have convinced a skeptical reader that there are some advantages when is similar to a diagonal matrix. This is worthy of a formal definition.    A matrix is diagonalizable if for some invertible matrix and some diagonal matrix .    Given this definition, it is natural to ask exactly when a matrix is diagonalizable. That answer comes in the following theorem.   The Diagonalization Theorem   A matrix is diagonalizable if and only if has linearly independent eigenvectors.  More specifically, , for a diagonal matrix , if and only if the columns of are linearly independent eigenvectors of . In this case, the diagonal entries of are the the eigenvalues of which correspond, respectively, to the columns of .    If is an matrix with columns , and if is a diagonal matrix with diagonal entries , then we have , and also . (If the reader has trouble believing , thinking of matrix multiplication, in each column of the product, as a linear combination of the columns of with weights coming from the corresponding column of , may help!) If is diagonalizable, then and . By and , by equating columns in and we see that for . Since is invertible, the columns of must be linearly independent. Further, since the columns of cannot be zero vectors, this argument shows that is an eigenvalue of with eigenvector , for each . This proves one direction of the theorem.  If we are given as eigenvectors of with corresponding eigenvalues , then we can form the matrices and . The argument in the previous paragraph shows that . (Note that we have not yet used the linear independence of the eigenvectors!) If the eigenvectors are linearly independent, then is invertible, and implies , making diagonalizable.      says that is diagonalizable if and only if there is a basis of consisting of eigenvectors of . We call such a basis an eigenvector basis of .     How to Diagonalize a Matrix  Using , we see there are four steps to diagonalizing a matrix. We will summarize them in the following algorithm.    If , we follow these steps to diagonalize .   Find the eigenvalues of . This usually involves solving the characteristic equation for . (If the characteristic polynomial does not factor into linear factors, the matrix is not diagonalizable.)    Find linearly independent eigenvectors for . (This step may fail, in which case the matrix is not diagonalizable.)    Construct the matrix using the vectors from the previous step. Form by using the eigenvectors as its columns. The order of these vectors does not matter.    Construct from the eigenvalues. Once the matrix is formed, the order of these eigenvalues does matter the eigenvalues must be placed along the diagonal of in the order corresponding to the columns of . In other words, entry in should be the eigenvalue for the vector which is column in .       After forming and , it is a good idea to check that the process was successful. We may verify the equation , or alternatively we may check that . (This avoids the need to find .)    We consider the matrix : . Though the reader can determine this independently, we will provide the characteristic polynomial to save time and space: . From this we see that the eigenvalues of are and .  We now find bases for the associated eigenspaces. Again, we will suppress all of the calculations since the previous sections have gone through these in some detail. We find that , and . Since we have three linearly independent eigenvectors, we know from that is diagonalizable.  We now form the matrices and according to the algorithm: . We can check that our diagonalization was successful by calculating and : .    We now consider another example of a matrix.    We consider the matrix : . The characteristic polynomial for is . So the eigenvalues of are and .  When we look for eigenvalues, we find the following for : . This shows that is only one-dimensional. Since we need three total linearly independent eigenvectors to diagonalize , and we will only get one from , we needed to be two-dimensional. This shows that is not diagonalizable.    The difference between the last two examples shows that diagonalizability is subtle. There are times when we can tell if a matrix is diagonalizable without a lot of work, but sometimes we need to get all the way to the eigenspace calculation before having an answer. The following theorem states a situation in which diagonalizability is easier to confirm.    Let . If has distinct eigenvalues, is diagonalizable.    If has distinct eigenvalues, let be eigenvectors which correspond to those eigenvalues. Then, by , the set is linearly independent. Since our vectors are in , by this basis of eigenvectors of means that is diagonalizable.      We consider the following matrix : . Since is lower triangular, we can read the eigenvalues off of the main diagonal: . Since there are three distinct eigenvalues for this matrix, then says that is diagonalizable.     Having distinct eigenvalues is a sufficient condition for a matrix to be diagonalizable, but it is not necessary . In other words, a matrix can still be diagonalizable with fewer than distinct eigenvalues. We have already encountered this in .   We now collect some facts about the diagonalizability of a matrix into a theorem. (We omit the proof.)    Let have distinct eigenvalues .   For , the dimension of is less than or equal to the (algebraic) multiplicity of .    The matrix is diagonalizable if and only if the sum of the dimensions of the eigenspaces equals , and this happens if and only if (i) the characteristic polynomial factors completely into linear factors, and (ii) the dimension of equals the multiplicity of for each .    If is diagonalizable and is a basis for , then is an eigenvector basis for .         Linear Transformations and Diagonalizability  In we saw that, for linear transformations between finite-dimensional vector spaces, we could view these transformations as multiplication by a matrix if we were content to handle coordinate vectors. And while we didn't have the current terminology at that point, in we were calculating coordinate matrices for linear transformations using similarity. (See .)  This means that our discussion of similar matrices has implications for linear transformations broadly. And these implication are, unsurprisingly, related to eigenvalues and eigenvectors.    Let be a finite-dimensional vector space and let . Then is diagonalizable if there exists a basis of such that is diagonal.    Based on our discussion thus far in this section, the reader may guess that the vectors in a basis referenced in are eigenvectors for . What is true for matrices is (generally) true in the proper context for linear transformations.    A linear transformation is diagonalizable if and only if there exists a basis of consisting entirely of eigenvectors of .      In , we considered the linear transformation on which is reflection across the line . In that example, we looked at the basis for , where . We saw that the matrix was diagonal, and now we know that was because the basis vectors are eigenvectors for . Since lies on the line of reflection, it is an eigenvector for with eigenvalue 1, and since lies on the line perpendicular to the line of reflection, it is an eigenvector for with eigenvalue . The matrix is .    The following result is basically a restatement of , using the language of similar matrices.    Suppose that is a finite-dimensional vector space and that . Suppose further that and are bases for . Then the coordinate matrices and are similar.    Since change-of-basis matrices are invertible, this really is just a restatement of .    The final result in this section brings several prior results together, tying diagonalizability of linear transformations and diagonalizability of matrices to each other in a predictable way.    Let be a finite-dimensional vector space, let be a basis for , and let . Then is a diagonalizable matrix if and only if is a diagonalizable linear transformation.    This theorem says that a linear transformation is diagonalizable if there is a basis of with respect to which the coordinate matrix of is diagonalizable.  We finish this section with an example which is perhaps a bit contrived but which is also, hopefully, illustrative.    Let be the following linear transformation: . If is the standard basis for , then is . It is fairly easy to determine that is diagonalizable, since the characteristic polynomial is . Since is diagonalizable, that means that is a diagonalizable linear transformation.  Using coordinate vectors, we can also determine the basis of with respect to which has a diagonal coordinate matrix. (It is a basis of eigenvectors of !)  Since the eigenvalues of are , we can find bases for the related eigenspaces. For ease of notation, let . Now . These are the coordinate vectors for the eigenvectors of with respect to the standard basis. Therefore, an eigenvector basis of is , and is a diagonal matrix with diagonal entries and .       Consider the following matrix : .   Find the characteristic polynomial and the eigenvalues of . Show your work.     Using part (a), explain why is diagonalizable.        Let be the same matrix as in the first reading question. Following , diagonalize .       Let be the following matrices: . If , calculate .    Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't.    Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't.    Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't. (Hint: One of the eigenvalues of is .)    Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't. (Hint: One of the eigenvalues of is .)    Suppose that has three distinct eigenvalues. One eigenspace is one-dimensional and one of the other eigenspaces is two-dimensional. Is it possible for  not to be diagonalizable? Explain.    Prove that if is both invertible and diagonalizable, then so is .    Prove that if has linearly independent eigenvectors, then so does .    Consider the following matrix : . Prove that a diagonalization is not unique by finding two pairs of matrices which diagonalize .    This problem explores the relationship between invertibility and diagonalizability.   Construct a nonzero matrix which is invertible but not diagonalizable.    Construct a nondiagonal matrix that is diagonalizable but not invertible.       Let be projection onto the -plane. Prove that is diagonalizable.    Let be orthogonal projection onto the line . Prove that is diagonalizable.    Let be counterclockwise rotation by radians.   Prove that is not diagonalizable.    Prove that is diagonalizable.       "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "sec-diagonalization.html#def-diagonalizable",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  A matrix is diagonalizable if for some invertible matrix and some diagonal matrix .   "
},
{
  "id": "thm-diagonalization",
  "level": "2",
  "url": "sec-diagonalization.html#thm-diagonalization",
  "type": "Theorem",
  "number": "6.3.2",
  "title": "The Diagonalization Theorem.",
  "body": " The Diagonalization Theorem   A matrix is diagonalizable if and only if has linearly independent eigenvectors.  More specifically, , for a diagonal matrix , if and only if the columns of are linearly independent eigenvectors of . In this case, the diagonal entries of are the the eigenvalues of which correspond, respectively, to the columns of .    If is an matrix with columns , and if is a diagonal matrix with diagonal entries , then we have , and also . (If the reader has trouble believing , thinking of matrix multiplication, in each column of the product, as a linear combination of the columns of with weights coming from the corresponding column of , may help!) If is diagonalizable, then and . By and , by equating columns in and we see that for . Since is invertible, the columns of must be linearly independent. Further, since the columns of cannot be zero vectors, this argument shows that is an eigenvalue of with eigenvector , for each . This proves one direction of the theorem.  If we are given as eigenvectors of with corresponding eigenvalues , then we can form the matrices and . The argument in the previous paragraph shows that . (Note that we have not yet used the linear independence of the eigenvectors!) If the eigenvectors are linearly independent, then is invertible, and implies , making diagonalizable.   "
},
{
  "id": "subsec-diag-9",
  "level": "2",
  "url": "sec-diagonalization.html#subsec-diag-9",
  "type": "Note",
  "number": "6.3.3",
  "title": "",
  "body": "  says that is diagonalizable if and only if there is a basis of consisting of eigenvectors of . We call such a basis an eigenvector basis of .  "
},
{
  "id": "alg-diagonalize",
  "level": "2",
  "url": "sec-diagonalization.html#alg-diagonalize",
  "type": "Algorithm",
  "number": "6.3.4",
  "title": "",
  "body": "  If , we follow these steps to diagonalize .   Find the eigenvalues of . This usually involves solving the characteristic equation for . (If the characteristic polynomial does not factor into linear factors, the matrix is not diagonalizable.)    Find linearly independent eigenvectors for . (This step may fail, in which case the matrix is not diagonalizable.)    Construct the matrix using the vectors from the previous step. Form by using the eigenvectors as its columns. The order of these vectors does not matter.    Construct from the eigenvalues. Once the matrix is formed, the order of these eigenvalues does matter the eigenvalues must be placed along the diagonal of in the order corresponding to the columns of . In other words, entry in should be the eigenvalue for the vector which is column in .      "
},
{
  "id": "examp-diagonalize-1",
  "level": "2",
  "url": "sec-diagonalization.html#examp-diagonalize-1",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "  We consider the matrix : . Though the reader can determine this independently, we will provide the characteristic polynomial to save time and space: . From this we see that the eigenvalues of are and .  We now find bases for the associated eigenspaces. Again, we will suppress all of the calculations since the previous sections have gone through these in some detail. We find that , and . Since we have three linearly independent eigenvectors, we know from that is diagonalizable.  We now form the matrices and according to the algorithm: . We can check that our diagonalization was successful by calculating and : .   "
},
{
  "id": "subsec-how-to-diagonalize-7",
  "level": "2",
  "url": "sec-diagonalization.html#subsec-how-to-diagonalize-7",
  "type": "Example",
  "number": "6.3.6",
  "title": "",
  "body": "  We consider the matrix : . The characteristic polynomial for is . So the eigenvalues of are and .  When we look for eigenvalues, we find the following for : . This shows that is only one-dimensional. Since we need three total linearly independent eigenvectors to diagonalize , and we will only get one from , we needed to be two-dimensional. This shows that is not diagonalizable.   "
},
{
  "id": "thm-distinct-evalues-diagonalizable",
  "level": "2",
  "url": "sec-diagonalization.html#thm-distinct-evalues-diagonalizable",
  "type": "Theorem",
  "number": "6.3.7",
  "title": "",
  "body": "  Let . If has distinct eigenvalues, is diagonalizable.    If has distinct eigenvalues, let be eigenvectors which correspond to those eigenvalues. Then, by , the set is linearly independent. Since our vectors are in , by this basis of eigenvectors of means that is diagonalizable.   "
},
{
  "id": "subsec-how-to-diagonalize-10",
  "level": "2",
  "url": "sec-diagonalization.html#subsec-how-to-diagonalize-10",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": "  We consider the following matrix : . Since is lower triangular, we can read the eigenvalues off of the main diagonal: . Since there are three distinct eigenvalues for this matrix, then says that is diagonalizable.   "
},
{
  "id": "subsec-how-to-diagonalize-11",
  "level": "2",
  "url": "sec-diagonalization.html#subsec-how-to-diagonalize-11",
  "type": "Note",
  "number": "6.3.9",
  "title": "",
  "body": " Having distinct eigenvalues is a sufficient condition for a matrix to be diagonalizable, but it is not necessary . In other words, a matrix can still be diagonalizable with fewer than distinct eigenvalues. We have already encountered this in .  "
},
{
  "id": "thm-diagonalizable-2",
  "level": "2",
  "url": "sec-diagonalization.html#thm-diagonalizable-2",
  "type": "Theorem",
  "number": "6.3.10",
  "title": "",
  "body": "  Let have distinct eigenvalues .   For , the dimension of is less than or equal to the (algebraic) multiplicity of .    The matrix is diagonalizable if and only if the sum of the dimensions of the eigenspaces equals , and this happens if and only if (i) the characteristic polynomial factors completely into linear factors, and (ii) the dimension of equals the multiplicity of for each .    If is diagonalizable and is a basis for , then is an eigenvector basis for .      "
},
{
  "id": "def-diagonalizable-lin-transf",
  "level": "2",
  "url": "sec-diagonalization.html#def-diagonalizable-lin-transf",
  "type": "Definition",
  "number": "6.3.11",
  "title": "",
  "body": "  Let be a finite-dimensional vector space and let . Then is diagonalizable if there exists a basis of such that is diagonal.   "
},
{
  "id": "prop-diag-lin-transf",
  "level": "2",
  "url": "sec-diagonalization.html#prop-diag-lin-transf",
  "type": "Proposition",
  "number": "6.3.12",
  "title": "",
  "body": "  A linear transformation is diagonalizable if and only if there exists a basis of consisting entirely of eigenvectors of .   "
},
{
  "id": "subsec-diag-linear-transf-7",
  "level": "2",
  "url": "sec-diagonalization.html#subsec-diag-linear-transf-7",
  "type": "Example",
  "number": "6.3.13",
  "title": "",
  "body": "  In , we considered the linear transformation on which is reflection across the line . In that example, we looked at the basis for , where . We saw that the matrix was diagonal, and now we know that was because the basis vectors are eigenvectors for . Since lies on the line of reflection, it is an eigenvector for with eigenvalue 1, and since lies on the line perpendicular to the line of reflection, it is an eigenvector for with eigenvalue . The matrix is .   "
},
{
  "id": "prop-sim-coord-matrices",
  "level": "2",
  "url": "sec-diagonalization.html#prop-sim-coord-matrices",
  "type": "Proposition",
  "number": "6.3.14",
  "title": "",
  "body": "  Suppose that is a finite-dimensional vector space and that . Suppose further that and are bases for . Then the coordinate matrices and are similar.    Since change-of-basis matrices are invertible, this really is just a restatement of .   "
},
{
  "id": "thm-diagonalizability-lt-matrices",
  "level": "2",
  "url": "sec-diagonalization.html#thm-diagonalizability-lt-matrices",
  "type": "Theorem",
  "number": "6.3.15",
  "title": "",
  "body": "  Let be a finite-dimensional vector space, let be a basis for , and let . Then is a diagonalizable matrix if and only if is a diagonalizable linear transformation.   "
},
{
  "id": "examp-p1",
  "level": "2",
  "url": "sec-diagonalization.html#examp-p1",
  "type": "Example",
  "number": "6.3.16",
  "title": "",
  "body": "  Let be the following linear transformation: . If is the standard basis for , then is . It is fairly easy to determine that is diagonalizable, since the characteristic polynomial is . Since is diagonalizable, that means that is a diagonalizable linear transformation.  Using coordinate vectors, we can also determine the basis of with respect to which has a diagonal coordinate matrix. (It is a basis of eigenvectors of !)  Since the eigenvalues of are , we can find bases for the related eigenspaces. For ease of notation, let . Now . These are the coordinate vectors for the eigenvectors of with respect to the standard basis. Therefore, an eigenvector basis of is , and is a diagonal matrix with diagonal entries and .   "
},
{
  "id": "sec-diagonalization-6-1",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-6-1",
  "type": "Reading Question",
  "number": "6.3.4.1",
  "title": "",
  "body": " Consider the following matrix : .   Find the characteristic polynomial and the eigenvalues of . Show your work.     Using part (a), explain why is diagonalizable.      "
},
{
  "id": "sec-diagonalization-6-2",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-6-2",
  "type": "Reading Question",
  "number": "6.3.4.2",
  "title": "",
  "body": " Let be the same matrix as in the first reading question. Following , diagonalize .   "
},
{
  "id": "sec-diagonalization-7-1",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-1",
  "type": "Exercise",
  "number": "6.3.5.1",
  "title": "",
  "body": " Let be the following matrices: . If , calculate .  "
},
{
  "id": "sec-diagonalization-7-2",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-2",
  "type": "Exercise",
  "number": "6.3.5.2",
  "title": "",
  "body": " Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't.  "
},
{
  "id": "sec-diagonalization-7-3",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-3",
  "type": "Exercise",
  "number": "6.3.5.3",
  "title": "",
  "body": " Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't.  "
},
{
  "id": "sec-diagonalization-7-4",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-4",
  "type": "Exercise",
  "number": "6.3.5.4",
  "title": "",
  "body": " Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't. (Hint: One of the eigenvalues of is .)  "
},
{
  "id": "sec-diagonalization-7-5",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-5",
  "type": "Exercise",
  "number": "6.3.5.5",
  "title": "",
  "body": " Consider the following matrix : . Determine whether or not is diagonalizable. If it is, diagonalize it. If it isn't, explain why it isn't. (Hint: One of the eigenvalues of is .)  "
},
{
  "id": "sec-diagonalization-7-6",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-6",
  "type": "Exercise",
  "number": "6.3.5.6",
  "title": "",
  "body": " Suppose that has three distinct eigenvalues. One eigenspace is one-dimensional and one of the other eigenspaces is two-dimensional. Is it possible for  not to be diagonalizable? Explain.  "
},
{
  "id": "sec-diagonalization-7-7",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-7",
  "type": "Exercise",
  "number": "6.3.5.7",
  "title": "",
  "body": " Prove that if is both invertible and diagonalizable, then so is .  "
},
{
  "id": "sec-diagonalization-7-8",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-8",
  "type": "Exercise",
  "number": "6.3.5.8",
  "title": "",
  "body": " Prove that if has linearly independent eigenvectors, then so does .  "
},
{
  "id": "sec-diagonalization-7-9",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-9",
  "type": "Exercise",
  "number": "6.3.5.9",
  "title": "",
  "body": " Consider the following matrix : . Prove that a diagonalization is not unique by finding two pairs of matrices which diagonalize .  "
},
{
  "id": "sec-diagonalization-7-10",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-10",
  "type": "Exercise",
  "number": "6.3.5.10",
  "title": "",
  "body": " This problem explores the relationship between invertibility and diagonalizability.   Construct a nonzero matrix which is invertible but not diagonalizable.    Construct a nondiagonal matrix that is diagonalizable but not invertible.     "
},
{
  "id": "sec-diagonalization-7-11",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-11",
  "type": "Exercise",
  "number": "6.3.5.11",
  "title": "",
  "body": " Let be projection onto the -plane. Prove that is diagonalizable.  "
},
{
  "id": "sec-diagonalization-7-12",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-12",
  "type": "Exercise",
  "number": "6.3.5.12",
  "title": "",
  "body": " Let be orthogonal projection onto the line . Prove that is diagonalizable.  "
},
{
  "id": "sec-diagonalization-7-13",
  "level": "2",
  "url": "sec-diagonalization.html#sec-diagonalization-7-13",
  "type": "Exercise",
  "number": "6.3.5.13",
  "title": "",
  "body": " Let be counterclockwise rotation by radians.   Prove that is not diagonalizable.    Prove that is diagonalizable.     "
},
{
  "id": "sec-invariants",
  "level": "1",
  "url": "sec-invariants.html",
  "type": "Section",
  "number": "6.4",
  "title": "Invariants",
  "body": " Invariants   One of the fun aspects of linear algebra is that it touches so many different areas of mathematics. In this section we will connect row equivalence and similarity to the topic of mathematical invariants, which is used in many mathematical disciplines to distinguish between related objects.    Introduction to Invariants  Many areas of mathematics have a notion of the relatedness of the important objects of study. In linear algebra, we have already learned about vector spaces being isomorphic ( ), and this idea shows up widely. We often prove that mathematical objects are related by defining a function between them and showing that it has all the right properties.  However, showing that two mathematical objects are not related is harder when working strictly from the definitions. It is difficult to show that a function with certain properties cannot exist not being able to find or think of such a function is not a sufficient argument! This is where invariants enter the picture.  Two related objects have the same value of an invariant. Invariants are not a tool used to show relatedness as to show unrelatedness. If two objects have different values of the invariant, they cannot be related. (Merely knowing that two objects have the same value of the invariant doesn't give any immediate conclusion about the relatedness of those objects.)  Before this discussion gets too vague, let's look at an example that most readers of this book should recognize.    We say that two geometric objects are congruent if they have the same shape and size. Most readers will likely have spent some time considering congruent triangles in a geometry class, where they encountered several congruence theorems for triangles: Side-Side-Side, Side-Angle-Side, etc. (Note that congruent triangles are not the same as similar triangles, though there are some, ahem, similarities.)  In this example, congruence is the definition of relatedness we are using. We can be even more precise. The congruence of triangles is an equivalence relation , and when using invariants there is usually an equivalence relation in view.  One invariant that can be used to distinguish between triangles that are not congruent is the area of the triangle. It is easy to show that if two triangles are congruent, they have the same area. Therefore, if two triangles have different areas, we can conclude that they are not congruent.  To be specific, suppose that triangle is a 30-60-90 triangle with side lengths and triangle is a 45-45-90 triangle with side lengths . Then since the area of a right triangle is easy to calculate using the formula, we can see that both triangles and have an area of square units. But these triangles are not congruent they have different angles, after all.  In summary, the area of a triangle can be used to distinguish between triangles that are not congruent. However, area cannot be used to conclude that two triangles are congruent. In this way, area is a typical invariant.    In this text, we have discussed two equivalence relations on matrices for which there exist some interesting invariants. Row equivalence is an equivalence relation on the set . (See .) More recently, we have looked at similarity , which is an equivalence relation on the set . (See .)  We have shown in that the characteristic polynomial is an invariant for similar matrices. If two matrices are similar, they have the same characteristic polynomial, and therefore the same eigenvalues (with the same multiplicities). This means if we know of two matrices of the same size with different eigenvalues, they cannot be similar.  Additionally and using much the same argument the determinant is an invariant for similar matrices. (We asked the reader to prove this in .) So, two matrices of the same size with different determinants cannot be similar.  While the characteristic polynomial and the determinant are useful invariants for similarity, they are far from the only ones. In the second half of this section we will develop two more invariants which respect similarity, one of which is quite surprising.    Rank and Trace as Invariants  We will first state and prove a few results needed to establish rank as an invariant.    Suppose that and are finite-dimensional vector spaces and that . Then, for any bases of and of , we have .    Suppose that and let . Since , we have . By we know that is isomorphic to . The vectors are exactly the columns of , so .  For the second equality, we refer to the Rank-Nullity Theorem. If and , then is . We have proved that , and comparing the two equations in , we are left with , as desired.      Suppose that is an -dimensional vector space over , that is a basis of , and that . Suppose further that and are similar matrices in and that . Then there exists a basis of such that .    Let and suppose that . We define and, for each , we define by , so that is the coordinate vector . Since is invertible, then is a basis of , so is a basis of . (This is again due to the coordinate mapping being an isomorphism.) We also have for each , so . Therefore, by , , and so by , .      , along with show us that two matrices are similar if and only if they represent the same linear transformation with respect to different bases.   With these two results in hand, we can state the first invariant we have been pointing toward.    If are similar, then .    This follows from (in the case where and ) as well as .    In the following example, we put this invariant to work.    Let be the following matrices: . Some quick row reduction shows that while , so we know that and are not similar.    We now move into the development and discussion of our final invariant, the trace of a matrix. Of all the invariants we discuss, the trace is by far the easiest to calculate!    Let . The trace of is the sum of the numbers along the main diagonal of . In other words, .      Here are two matrices over : . By summing the entries along the main diagonal, we see that and .    We need surprisingly few additional results in order to establish the trace as an invariant.    If and , then .    We begin by using the definitions of the trace and matrix multiplication: . Since multiplication and addition in a field are both commutative, we can switch the order of summation and multiplication. The calculation is finished using the definitions of matrix multiplication and the trace again: .    This next result finishes our argument.    If and are similar matrices, then .    Suppose that . By the associativity of matrix multiplication and , we have .    We can now use the trace as an invariant.    Let and be the following matrices over : . Since and , we know that and are not similar matrices.    One consequence of this invariant is that it allows us to define the trace of a linear transformation.    Let be a finite-dimensional vector space and let . If and are two bases for , then .    This is a direct and immediate consequence of and .      Let be a finite-dimensional vector space and let . Then the trace of is , where is any basis of .      We end this section with an example of a linear transformation which was defined in . In that example, we saw that , so we can see that .       Use only the rank invariant to answer the following questions. If that invariant does not give you enough information to answer the question, explain why that is. , .   Are and similar? Explain.     Are and similar? Explain.     Are and similar? Explain.        Use only the trace invariant to answer the following questions. If that invariant does not give you enough information to answer the question, explain why that is. (The matrices for this question are the same as for the previous reading question.)   Are and similar? Explain.     Are and similar? Explain.     Are and similar? Explain.          Consider the following two matrices in : .   Explain why both determinant and rank are not useful invariants to say that and are not similar.    Prove that and are not similar.       Prove that the determinant is an invariant for similarity on the set of matrices over .    Let be this matrix: .   Write out the characteristic polynomial of , substituting and where appropriate.    Argue that, for matrices, the fact that the characteristic polynomial is an invariant (for similarity) implies that both the trace and determinant are invariants.       Is diagonalizability an invariant (for similarity) on the set ? In other words, if and are similar, must it be true that either (a) they are both diagonalizable, or (b) they are both not diagonalizable?    Suppose that .   Prove that if has distinct eigenvalues, then is the sum of the eigenvalues of .    Is the result from part (a) true if does not have distinct eigenvalues? For example, if has only two distinct eigenvalues, must be the sum of the eigenvalues (with multiplicity)?       There are 16 elements of the set . How many equivalence classes are there for this set under the similarity equivalence relation? Use as many of the invariants as you can to distinguish between matrices that are not similar to each other.       Prove that if , then .    Give an example of three matrices such that .       For a matrix , define the function as the sum of all of the entries of . Prove or disprove that is an invariant for similar matrices.    Is rank an invariant for row equivalence? Justify your answer.    Is the trace an invariant for row equivalence? Justify your answer.    Is the determinant an invariant for row equivalence? Justify your answer.    "
},
{
  "id": "subsec-intro-invariants-6",
  "level": "2",
  "url": "sec-invariants.html#subsec-intro-invariants-6",
  "type": "Example",
  "number": "6.4.1",
  "title": "",
  "body": "  We say that two geometric objects are congruent if they have the same shape and size. Most readers will likely have spent some time considering congruent triangles in a geometry class, where they encountered several congruence theorems for triangles: Side-Side-Side, Side-Angle-Side, etc. (Note that congruent triangles are not the same as similar triangles, though there are some, ahem, similarities.)  In this example, congruence is the definition of relatedness we are using. We can be even more precise. The congruence of triangles is an equivalence relation , and when using invariants there is usually an equivalence relation in view.  One invariant that can be used to distinguish between triangles that are not congruent is the area of the triangle. It is easy to show that if two triangles are congruent, they have the same area. Therefore, if two triangles have different areas, we can conclude that they are not congruent.  To be specific, suppose that triangle is a 30-60-90 triangle with side lengths and triangle is a 45-45-90 triangle with side lengths . Then since the area of a right triangle is easy to calculate using the formula, we can see that both triangles and have an area of square units. But these triangles are not congruent they have different angles, after all.  In summary, the area of a triangle can be used to distinguish between triangles that are not congruent. However, area cannot be used to conclude that two triangles are congruent. In this way, area is a typical invariant.   "
},
{
  "id": "thm-rank-lt-matrix",
  "level": "2",
  "url": "sec-invariants.html#thm-rank-lt-matrix",
  "type": "Theorem",
  "number": "6.4.2",
  "title": "",
  "body": "  Suppose that and are finite-dimensional vector spaces and that . Then, for any bases of and of , we have .    Suppose that and let . Since , we have . By we know that is isomorphic to . The vectors are exactly the columns of , so .  For the second equality, we refer to the Rank-Nullity Theorem. If and , then is . We have proved that , and comparing the two equations in , we are left with , as desired.   "
},
{
  "id": "prop-similar-matrices-same-lt",
  "level": "2",
  "url": "sec-invariants.html#prop-similar-matrices-same-lt",
  "type": "Proposition",
  "number": "6.4.3",
  "title": "",
  "body": "  Suppose that is an -dimensional vector space over , that is a basis of , and that . Suppose further that and are similar matrices in and that . Then there exists a basis of such that .    Let and suppose that . We define and, for each , we define by , so that is the coordinate vector . Since is invertible, then is a basis of , so is a basis of . (This is again due to the coordinate mapping being an isomorphism.) We also have for each , so . Therefore, by , , and so by , .   "
},
{
  "id": "subsec-inv-rank-trace-5",
  "level": "2",
  "url": "sec-invariants.html#subsec-inv-rank-trace-5",
  "type": "Note",
  "number": "6.4.4",
  "title": "",
  "body": "  , along with show us that two matrices are similar if and only if they represent the same linear transformation with respect to different bases.  "
},
{
  "id": "cor-rank-invariant",
  "level": "2",
  "url": "sec-invariants.html#cor-rank-invariant",
  "type": "Corollary",
  "number": "6.4.5",
  "title": "",
  "body": "  If are similar, then .    This follows from (in the case where and ) as well as .   "
},
{
  "id": "subsec-inv-rank-trace-9",
  "level": "2",
  "url": "sec-invariants.html#subsec-inv-rank-trace-9",
  "type": "Example",
  "number": "6.4.6",
  "title": "",
  "body": "  Let be the following matrices: . Some quick row reduction shows that while , so we know that and are not similar.   "
},
{
  "id": "def-trace",
  "level": "2",
  "url": "sec-invariants.html#def-trace",
  "type": "Definition",
  "number": "6.4.7",
  "title": "",
  "body": "  Let . The trace of is the sum of the numbers along the main diagonal of . In other words, .   "
},
{
  "id": "subsec-inv-rank-trace-12",
  "level": "2",
  "url": "sec-invariants.html#subsec-inv-rank-trace-12",
  "type": "Example",
  "number": "6.4.8",
  "title": "",
  "body": "  Here are two matrices over : . By summing the entries along the main diagonal, we see that and .   "
},
{
  "id": "prop-trace-mult",
  "level": "2",
  "url": "sec-invariants.html#prop-trace-mult",
  "type": "Proposition",
  "number": "6.4.9",
  "title": "",
  "body": "  If and , then .    We begin by using the definitions of the trace and matrix multiplication: . Since multiplication and addition in a field are both commutative, we can switch the order of summation and multiplication. The calculation is finished using the definitions of matrix multiplication and the trace again: .   "
},
{
  "id": "cor-trace-invariant",
  "level": "2",
  "url": "sec-invariants.html#cor-trace-invariant",
  "type": "Corollary",
  "number": "6.4.10",
  "title": "",
  "body": "  If and are similar matrices, then .    Suppose that . By the associativity of matrix multiplication and , we have .   "
},
{
  "id": "subsec-inv-rank-trace-18",
  "level": "2",
  "url": "sec-invariants.html#subsec-inv-rank-trace-18",
  "type": "Example",
  "number": "6.4.11",
  "title": "",
  "body": "  Let and be the following matrices over : . Since and , we know that and are not similar matrices.   "
},
{
  "id": "cor-trace-lt",
  "level": "2",
  "url": "sec-invariants.html#cor-trace-lt",
  "type": "Corollary",
  "number": "6.4.12",
  "title": "",
  "body": "  Let be a finite-dimensional vector space and let . If and are two bases for , then .    This is a direct and immediate consequence of and .   "
},
{
  "id": "def-trace-lt",
  "level": "2",
  "url": "sec-invariants.html#def-trace-lt",
  "type": "Definition",
  "number": "6.4.13",
  "title": "",
  "body": "  Let be a finite-dimensional vector space and let . Then the trace of is , where is any basis of .   "
},
{
  "id": "subsec-inv-rank-trace-22",
  "level": "2",
  "url": "sec-invariants.html#subsec-inv-rank-trace-22",
  "type": "Example",
  "number": "6.4.14",
  "title": "",
  "body": "  We end this section with an example of a linear transformation which was defined in . In that example, we saw that , so we can see that .   "
},
{
  "id": "sec-invariants-5-1",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-5-1",
  "type": "Reading Question",
  "number": "6.4.3.1",
  "title": "",
  "body": " Use only the rank invariant to answer the following questions. If that invariant does not give you enough information to answer the question, explain why that is. , .   Are and similar? Explain.     Are and similar? Explain.     Are and similar? Explain.      "
},
{
  "id": "sec-invariants-5-2",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-5-2",
  "type": "Reading Question",
  "number": "6.4.3.2",
  "title": "",
  "body": " Use only the trace invariant to answer the following questions. If that invariant does not give you enough information to answer the question, explain why that is. (The matrices for this question are the same as for the previous reading question.)   Are and similar? Explain.     Are and similar? Explain.     Are and similar? Explain.      "
},
{
  "id": "sec-invariants-6-1",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-1",
  "type": "Exercise",
  "number": "6.4.4.1",
  "title": "",
  "body": " Consider the following two matrices in : .   Explain why both determinant and rank are not useful invariants to say that and are not similar.    Prove that and are not similar.     "
},
{
  "id": "sec-invariants-6-2",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-2",
  "type": "Exercise",
  "number": "6.4.4.2",
  "title": "",
  "body": " Prove that the determinant is an invariant for similarity on the set of matrices over .  "
},
{
  "id": "sec-invariants-6-3",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-3",
  "type": "Exercise",
  "number": "6.4.4.3",
  "title": "",
  "body": " Let be this matrix: .   Write out the characteristic polynomial of , substituting and where appropriate.    Argue that, for matrices, the fact that the characteristic polynomial is an invariant (for similarity) implies that both the trace and determinant are invariants.     "
},
{
  "id": "sec-invariants-6-4",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-4",
  "type": "Exercise",
  "number": "6.4.4.4",
  "title": "",
  "body": " Is diagonalizability an invariant (for similarity) on the set ? In other words, if and are similar, must it be true that either (a) they are both diagonalizable, or (b) they are both not diagonalizable?  "
},
{
  "id": "sec-invariants-6-5",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-5",
  "type": "Exercise",
  "number": "6.4.4.5",
  "title": "",
  "body": " Suppose that .   Prove that if has distinct eigenvalues, then is the sum of the eigenvalues of .    Is the result from part (a) true if does not have distinct eigenvalues? For example, if has only two distinct eigenvalues, must be the sum of the eigenvalues (with multiplicity)?     "
},
{
  "id": "sec-invariants-6-6",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-6",
  "type": "Exercise",
  "number": "6.4.4.6",
  "title": "",
  "body": " There are 16 elements of the set . How many equivalence classes are there for this set under the similarity equivalence relation? Use as many of the invariants as you can to distinguish between matrices that are not similar to each other.  "
},
{
  "id": "sec-invariants-6-7",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-7",
  "type": "Exercise",
  "number": "6.4.4.7",
  "title": "",
  "body": "    Prove that if , then .    Give an example of three matrices such that .     "
},
{
  "id": "sec-invariants-6-8",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-8",
  "type": "Exercise",
  "number": "6.4.4.8",
  "title": "",
  "body": " For a matrix , define the function as the sum of all of the entries of . Prove or disprove that is an invariant for similar matrices.  "
},
{
  "id": "sec-invariants-6-9",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-9",
  "type": "Exercise",
  "number": "6.4.4.9",
  "title": "",
  "body": " Is rank an invariant for row equivalence? Justify your answer.  "
},
{
  "id": "sec-invariants-6-10",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-10",
  "type": "Exercise",
  "number": "6.4.4.10",
  "title": "",
  "body": " Is the trace an invariant for row equivalence? Justify your answer.  "
},
{
  "id": "sec-invariants-6-11",
  "level": "2",
  "url": "sec-invariants.html#sec-invariants-6-11",
  "type": "Exercise",
  "number": "6.4.4.11",
  "title": "",
  "body": " Is the determinant an invariant for row equivalence? Justify your answer.  "
},
{
  "id": "sec-inner-products",
  "level": "1",
  "url": "sec-inner-products.html",
  "type": "Section",
  "number": "7.1",
  "title": "Inner Products",
  "body": " Inner Products   A general vector space need not have any relevant geometry, and in most of our work up to this point, geometric notions did not play a central role. In this chapter, however, we will begin to take advantage of the geometry present in some vector spaces.    The Dot Product  In Euclidean geometry, we are introduced to the dot product quite early. The dot product in is essential to our understandings of length and distance.    For two vectors , we have the dot product of and given by , where and .      Suppose that and are the following two vectors in : . Then .     Having facility with matrix multiplication now, the observant reader will notice that .     The length or norm of a vector is the nonnegative scalar defined by .      If is the same as in , then .    Of special usefulness for us is the fact that the dot product gives us a notion of angles and perpendicularity.    Two vectors and in are orthogonal if .     The word orthogonal is another way of saying perpendicular , but orthogonal is used much more frequently in linear algebra.     Let , , and be the following vectors in : . We can see that and are not orthogonal, since . However, and are orthogonal, as .    As this chapter continues, the reader will see just how important orthogonality is. For now, we note that all of the vectors in the standard basis of , , are orthogonal to each other. That is, whenever .  A consequence of this last fact is stated in the following proposition.    If is given by , then for each , .    By definition of the dot product, we have , since the only nonzero entry of is .    This has been a very brief review\/introduction to the dot product. As we generalize this function in the remainder of this section, we will continue to remind the reader of important facts and properties as we need them.    The Inner Product  In the same way that vectors in gave us the intuition to consider a general vector space, the dot product in points us toward a more general function on vector spaces. Our generalization of the dot product is called the inner product .   Before this definition we need a quick reminder. For a complex number , recall that the complex conjugate of is defined by . This will be used in the following definition.     Let be a vector space over a field , where is either or . An inner product on is a function that associates to each pair of vectors and in an element of the field satisfying all of the following axioms. For all , , and in , and all :    ;     ;     ; and     and if and only if .     A vector space together with an inner product is called an inner product space .     If the field we have in mind is instead of , then the first property listed in the definition is just . (If , then .) Also, if our field is , we still require to be a real number, as this is implicit in the fourth property where .   Before we introduce examples, we want to comment here on why the only fields we allow for inner product spaces are and . The inner product requires that a notion of order be present in any field over which a vector space is defined. This is inherent in the fourth property listed in the definition of an inner product, where we must have for all . We do not have this sort of ordering in a finite field like . Since, for example, 6 and 1 and all represent the same number in , we cannot in any coherent way say that this value of the field is greater than or equal to 0. Because of this lack of ordering, finite fields do not have the sort of geometric properties that we require for an inner product space.    All real vector spaces with the dot product are inner product spaces. (Once again, we would be particularly bad at generalizing if the motivating case were not an example of the general situation!)      For vectors , the standard inner product is defined by , where and .  As an example calculation, we consider the following two vectors in : . Then we have .  We will leave for the exercises the proof that the inner product axioms hold for this function.      Let denote the vector space of continuous real-valued functions on the interval . (See for a discussion of vector spaces like this one.) We can study an inner product on this space defined by the following: . Again, we provide an example of a calculation. If and , then .  Proving that the inner product axioms hold requires recalling a few facts from calculus. We leave this to the exercises.    The following properties flow fairly quickly from the definition of an inner product.    Suppose that is an inner product space. Then the following statements are all true.   For each , .    For each and each , .    For each , .    If and for every , then .       We will prove the second property and leave the others for the exercises. Using the first and third axioms from the definition of the inner product, we have .    The presence of an inner product gives us a good way to define the length of a vector.    Let be an inner product space and let . Then the norm of is . If , then is called a unit vector .    In the following examples we calculate the norm of a few vectors in different vector spaces.    We consider the following vector in : . Using the standard inner product on , we have .      Returning to the vector space with the inner product defined in , we can find the norm of : . This means that .    Using the definition of the norm, we can examine what happens to the length of a vector when it is multiplied by a scalar: . (Note that when is our field, for a scalar is .) From this calculation we can see that when a vector gets multiplied by a scalar, its length is multiplied by that same scalar, in a way. (We can make the most geometric sense of this when is our field and when is positive.)    Often we will want a unit vector that points in the same direction as a given vector. We accomplish this by dividing a vector by its length in order to form a vector of length 1.  If we consider the vector in with the dot product, then we have . Therefore, a unit vector in the direction of would be .      Orthogonality  In the same way that we used the dot product to define orthogonality in , we can now extend that definition to our more general setting.    Two vectors and in an inner product space are orthogonal if . A set of vectors is orthogonal if whenever .    One of the ways that orthogonality is used is through the following result.    An orthogonal set of nonzero vectors in an inner product space is linearly independent.    Let be an orthogonal set of vectors in . Suppose that for some scalars . We want to show that all the scalars must be zero. Then, for each , we have . Since but , we know that , so . This is true for each , , so is linearly independent.    The next result is sometimes referred to as the Pythagorean Theorem for general inner product spaces. When there are only two orthogonal vectors, the reader will recognize the reference to the Pythagorean Theorem.    If is an orthogonal set of vectors in an inner product space , then .      Results for Inner Product Spaces  The property of orthogonality is so powerful that we will occasionally want to call upon it even when it is not already on the scene.    Let be an inner product space and let . Then can be written as , where and is orthogonal to . Specifically, if , then .    If , then we can take and , as every vector is orthogonal to . So, we now suppose that .  If there exists such that with orthogonal to , then we must have . This shows that the only possibility for is .  Once has been determined, then the choice of is determined by we must have . Now it is easy to check that, with these values, we indeed have and that holds.      We consider two vectors in to understand the relationship in this lemma: . The lemma specifies our calculations: . The reader can check that and that .    There are two famous results which involve the norm in an inner product space. We present them without proof.   The Cauchy-Schwarz Inequality   For every pair of vectors in an inner product space , we have , with equality holding if and only if one vector is a scalar multiple of the other.     The Triangle Inequality   For every pair of vectors in an inner product space , we have .    We end this section with one final example of an inner product space.    We consider the vector space with a modified inner product: . The only change from the dot product in is the coefficient 2 on the first term. It is not difficult to verify that this is an inner product.  Since an inner product provides a way to measure distance and length (as well as angles), it is instructive to consider how this inner product changes our experience of . Just to take one example, if we think of the unit circle as the collection of all unit vectors in , then using this inner product we no longer have a circle but an ellipse. The radii of this ellipse would be horizontally and 1 vertically.       Consider and the inner product on defined there.   If , calculate .     Describe all of the vectors in which are orthogonal to using this inner product. All of these vectors fall on a line through the origin what is that line?        Consider the following function on . For polynomials and , define by . Explain why this function is not an inner product on . (You must show why one of the inner product axioms fails, and to do this you should use an example.)       Consider the following inner product on . For , . (You do not need to prove that this is an inner product.)   Calculate where and .    Find a nonzero vector which is orthogonal to the vector from part (a).    Calculate and for from part (a).       Use to prove that the following set of vectors in is linearly independent: , where .    Consider the following inner product on : .   Give an example of two vectors in which are orthogonal with respect to the dot product but which are not orthogonal with respect to this inner product.    Give an example of two vectors in which are orthogonal with respect to this inner product but which are not orthogonal with respect to the dot product.        Let be the following matrix over : . Define a function on by , where the right side of the equals sign uses the standard dot product in . Prove that this function is an inner product.    Define the following function on : . Prove that this is an inner product.    Consider the following function defined on : . Prove that this function is not an inner product.    Consider the following function defined on : . Prove or disprove: this function is an inner product.    Consider the following function defined on : . Prove that this function is not an inner product.    Prove that the standard inner product on , defined in , is an inner product.    Prove that the inner product defined in is an inner product.    Suppose that is a vector space, is an inner product space, and that is injective. For , define by , where the right-hand side is the inner product on . Prove that this defines an inner product on .    Prove properties 1, 3, and 4 of .    "
},
{
  "id": "def-dot-prod",
  "level": "2",
  "url": "sec-inner-products.html#def-dot-prod",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  For two vectors , we have the dot product of and given by , where and .   "
},
{
  "id": "dot-prod-ex1",
  "level": "2",
  "url": "sec-inner-products.html#dot-prod-ex1",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  Suppose that and are the following two vectors in : . Then .   "
},
{
  "id": "subsec-dot-product-5",
  "level": "2",
  "url": "sec-inner-products.html#subsec-dot-product-5",
  "type": "Note",
  "number": "7.1.3",
  "title": "",
  "body": " Having facility with matrix multiplication now, the observant reader will notice that .  "
},
{
  "id": "def-length-dot",
  "level": "2",
  "url": "sec-inner-products.html#def-length-dot",
  "type": "Definition",
  "number": "7.1.4",
  "title": "",
  "body": "  The length or norm of a vector is the nonnegative scalar defined by .   "
},
{
  "id": "subsec-dot-product-7",
  "level": "2",
  "url": "sec-inner-products.html#subsec-dot-product-7",
  "type": "Example",
  "number": "7.1.5",
  "title": "",
  "body": "  If is the same as in , then .   "
},
{
  "id": "def-orthogonal",
  "level": "2",
  "url": "sec-inner-products.html#def-orthogonal",
  "type": "Definition",
  "number": "7.1.6",
  "title": "",
  "body": "  Two vectors and in are orthogonal if .   "
},
{
  "id": "subsec-dot-product-10",
  "level": "2",
  "url": "sec-inner-products.html#subsec-dot-product-10",
  "type": "Note",
  "number": "7.1.7",
  "title": "",
  "body": " The word orthogonal is another way of saying perpendicular , but orthogonal is used much more frequently in linear algebra.  "
},
{
  "id": "subsec-dot-product-11",
  "level": "2",
  "url": "sec-inner-products.html#subsec-dot-product-11",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": "  Let , , and be the following vectors in : . We can see that and are not orthogonal, since . However, and are orthogonal, as .   "
},
{
  "id": "prop-coords-dot-prod",
  "level": "2",
  "url": "sec-inner-products.html#prop-coords-dot-prod",
  "type": "Proposition",
  "number": "7.1.9",
  "title": "",
  "body": "  If is given by , then for each , .    By definition of the dot product, we have , since the only nonzero entry of is .   "
},
{
  "id": "subsec-general-inner-prod-3",
  "level": "2",
  "url": "sec-inner-products.html#subsec-general-inner-prod-3",
  "type": "Note",
  "number": "7.1.10",
  "title": "",
  "body": " Before this definition we need a quick reminder. For a complex number , recall that the complex conjugate of is defined by . This will be used in the following definition.  "
},
{
  "id": "def-inner-product",
  "level": "2",
  "url": "sec-inner-products.html#def-inner-product",
  "type": "Definition",
  "number": "7.1.11",
  "title": "",
  "body": "  Let be a vector space over a field , where is either or . An inner product on is a function that associates to each pair of vectors and in an element of the field satisfying all of the following axioms. For all , , and in , and all :    ;     ;     ; and     and if and only if .     A vector space together with an inner product is called an inner product space .   "
},
{
  "id": "subsec-general-inner-prod-5",
  "level": "2",
  "url": "sec-inner-products.html#subsec-general-inner-prod-5",
  "type": "Note",
  "number": "7.1.12",
  "title": "",
  "body": " If the field we have in mind is instead of , then the first property listed in the definition is just . (If , then .) Also, if our field is , we still require to be a real number, as this is implicit in the fourth property where .  "
},
{
  "id": "subsec-general-inner-prod-7",
  "level": "2",
  "url": "sec-inner-products.html#subsec-general-inner-prod-7",
  "type": "Example",
  "number": "7.1.13",
  "title": "",
  "body": "  All real vector spaces with the dot product are inner product spaces. (Once again, we would be particularly bad at generalizing if the motivating case were not an example of the general situation!)   "
},
{
  "id": "examp-std-ip-cn",
  "level": "2",
  "url": "sec-inner-products.html#examp-std-ip-cn",
  "type": "Example",
  "number": "7.1.14",
  "title": "",
  "body": "  For vectors , the standard inner product is defined by , where and .  As an example calculation, we consider the following two vectors in : . Then we have .  We will leave for the exercises the proof that the inner product axioms hold for this function.   "
},
{
  "id": "examp-ip-fn-space",
  "level": "2",
  "url": "sec-inner-products.html#examp-ip-fn-space",
  "type": "Example",
  "number": "7.1.15",
  "title": "",
  "body": "  Let denote the vector space of continuous real-valued functions on the interval . (See for a discussion of vector spaces like this one.) We can study an inner product on this space defined by the following: . Again, we provide an example of a calculation. If and , then .  Proving that the inner product axioms hold requires recalling a few facts from calculus. We leave this to the exercises.   "
},
{
  "id": "prop-inner-product-properties",
  "level": "2",
  "url": "sec-inner-products.html#prop-inner-product-properties",
  "type": "Proposition",
  "number": "7.1.16",
  "title": "",
  "body": "  Suppose that is an inner product space. Then the following statements are all true.   For each , .    For each and each , .    For each , .    If and for every , then .       We will prove the second property and leave the others for the exercises. Using the first and third axioms from the definition of the inner product, we have .   "
},
{
  "id": "def-norm",
  "level": "2",
  "url": "sec-inner-products.html#def-norm",
  "type": "Definition",
  "number": "7.1.17",
  "title": "",
  "body": "  Let be an inner product space and let . Then the norm of is . If , then is called a unit vector .   "
},
{
  "id": "subsec-general-inner-prod-15",
  "level": "2",
  "url": "sec-inner-products.html#subsec-general-inner-prod-15",
  "type": "Example",
  "number": "7.1.18",
  "title": "",
  "body": "  We consider the following vector in : . Using the standard inner product on , we have .   "
},
{
  "id": "subsec-general-inner-prod-16",
  "level": "2",
  "url": "sec-inner-products.html#subsec-general-inner-prod-16",
  "type": "Example",
  "number": "7.1.19",
  "title": "",
  "body": "  Returning to the vector space with the inner product defined in , we can find the norm of : . This means that .   "
},
{
  "id": "subsec-general-inner-prod-18",
  "level": "2",
  "url": "sec-inner-products.html#subsec-general-inner-prod-18",
  "type": "Example",
  "number": "7.1.20",
  "title": "",
  "body": "  Often we will want a unit vector that points in the same direction as a given vector. We accomplish this by dividing a vector by its length in order to form a vector of length 1.  If we consider the vector in with the dot product, then we have . Therefore, a unit vector in the direction of would be .   "
},
{
  "id": "def-orthogonal-general",
  "level": "2",
  "url": "sec-inner-products.html#def-orthogonal-general",
  "type": "Definition",
  "number": "7.1.21",
  "title": "",
  "body": "  Two vectors and in an inner product space are orthogonal if . A set of vectors is orthogonal if whenever .   "
},
{
  "id": "prop-orthogonality-lin-ind",
  "level": "2",
  "url": "sec-inner-products.html#prop-orthogonality-lin-ind",
  "type": "Proposition",
  "number": "7.1.22",
  "title": "",
  "body": "  An orthogonal set of nonzero vectors in an inner product space is linearly independent.    Let be an orthogonal set of vectors in . Suppose that for some scalars . We want to show that all the scalars must be zero. Then, for each , we have . Since but , we know that , so . This is true for each , , so is linearly independent.   "
},
{
  "id": "thm-pythag-inner-prods",
  "level": "2",
  "url": "sec-inner-products.html#thm-pythag-inner-prods",
  "type": "Theorem",
  "number": "7.1.23",
  "title": "",
  "body": "  If is an orthogonal set of vectors in an inner product space , then .   "
},
{
  "id": "lem-pair-orthog",
  "level": "2",
  "url": "sec-inner-products.html#lem-pair-orthog",
  "type": "Lemma",
  "number": "7.1.24",
  "title": "",
  "body": "  Let be an inner product space and let . Then can be written as , where and is orthogonal to . Specifically, if , then .    If , then we can take and , as every vector is orthogonal to . So, we now suppose that .  If there exists such that with orthogonal to , then we must have . This shows that the only possibility for is .  Once has been determined, then the choice of is determined by we must have . Now it is easy to check that, with these values, we indeed have and that holds.   "
},
{
  "id": "subsec-results-inner-products-4",
  "level": "2",
  "url": "sec-inner-products.html#subsec-results-inner-products-4",
  "type": "Example",
  "number": "7.1.25",
  "title": "",
  "body": "  We consider two vectors in to understand the relationship in this lemma: . The lemma specifies our calculations: . The reader can check that and that .   "
},
{
  "id": "thm-cauchy-schwarz",
  "level": "2",
  "url": "sec-inner-products.html#thm-cauchy-schwarz",
  "type": "Theorem",
  "number": "7.1.26",
  "title": "The Cauchy-Schwarz Inequality.",
  "body": " The Cauchy-Schwarz Inequality   For every pair of vectors in an inner product space , we have , with equality holding if and only if one vector is a scalar multiple of the other.   "
},
{
  "id": "thm-triangle-ineq",
  "level": "2",
  "url": "sec-inner-products.html#thm-triangle-ineq",
  "type": "Theorem",
  "number": "7.1.27",
  "title": "The Triangle Inequality.",
  "body": " The Triangle Inequality   For every pair of vectors in an inner product space , we have .   "
},
{
  "id": "examp-alt-ip-r2",
  "level": "2",
  "url": "sec-inner-products.html#examp-alt-ip-r2",
  "type": "Example",
  "number": "7.1.28",
  "title": "",
  "body": "  We consider the vector space with a modified inner product: . The only change from the dot product in is the coefficient 2 on the first term. It is not difficult to verify that this is an inner product.  Since an inner product provides a way to measure distance and length (as well as angles), it is instructive to consider how this inner product changes our experience of . Just to take one example, if we think of the unit circle as the collection of all unit vectors in , then using this inner product we no longer have a circle but an ellipse. The radii of this ellipse would be horizontally and 1 vertically.   "
},
{
  "id": "sec-inner-products-7-1",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-7-1",
  "type": "Reading Question",
  "number": "7.1.5.1",
  "title": "",
  "body": " Consider and the inner product on defined there.   If , calculate .     Describe all of the vectors in which are orthogonal to using this inner product. All of these vectors fall on a line through the origin what is that line?      "
},
{
  "id": "sec-inner-products-7-2",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-7-2",
  "type": "Reading Question",
  "number": "7.1.5.2",
  "title": "",
  "body": " Consider the following function on . For polynomials and , define by . Explain why this function is not an inner product on . (You must show why one of the inner product axioms fails, and to do this you should use an example.)   "
},
{
  "id": "sec-inner-products-8-1",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-1",
  "type": "Exercise",
  "number": "7.1.6.1",
  "title": "",
  "body": " Consider the following inner product on . For , . (You do not need to prove that this is an inner product.)   Calculate where and .    Find a nonzero vector which is orthogonal to the vector from part (a).    Calculate and for from part (a).     "
},
{
  "id": "sec-inner-products-8-2",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-2",
  "type": "Exercise",
  "number": "7.1.6.2",
  "title": "",
  "body": " Use to prove that the following set of vectors in is linearly independent: , where .  "
},
{
  "id": "sec-inner-products-8-3",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-3",
  "type": "Exercise",
  "number": "7.1.6.3",
  "title": "",
  "body": " Consider the following inner product on : .   Give an example of two vectors in which are orthogonal with respect to the dot product but which are not orthogonal with respect to this inner product.    Give an example of two vectors in which are orthogonal with respect to this inner product but which are not orthogonal with respect to the dot product.      "
},
{
  "id": "sec-inner-products-8-4",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-4",
  "type": "Exercise",
  "number": "7.1.6.4",
  "title": "",
  "body": " Let be the following matrix over : . Define a function on by , where the right side of the equals sign uses the standard dot product in . Prove that this function is an inner product.  "
},
{
  "id": "sec-inner-products-8-5",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-5",
  "type": "Exercise",
  "number": "7.1.6.5",
  "title": "",
  "body": " Define the following function on : . Prove that this is an inner product.  "
},
{
  "id": "sec-inner-products-8-6",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-6",
  "type": "Exercise",
  "number": "7.1.6.6",
  "title": "",
  "body": " Consider the following function defined on : . Prove that this function is not an inner product.  "
},
{
  "id": "sec-inner-products-8-7",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-7",
  "type": "Exercise",
  "number": "7.1.6.7",
  "title": "",
  "body": " Consider the following function defined on : . Prove or disprove: this function is an inner product.  "
},
{
  "id": "sec-inner-products-8-8",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-8",
  "type": "Exercise",
  "number": "7.1.6.8",
  "title": "",
  "body": " Consider the following function defined on : . Prove that this function is not an inner product.  "
},
{
  "id": "sec-inner-products-8-9",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-9",
  "type": "Exercise",
  "number": "7.1.6.9",
  "title": "",
  "body": " Prove that the standard inner product on , defined in , is an inner product.  "
},
{
  "id": "sec-inner-products-8-10",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-10",
  "type": "Exercise",
  "number": "7.1.6.10",
  "title": "",
  "body": " Prove that the inner product defined in is an inner product.  "
},
{
  "id": "sec-inner-products-8-11",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-11",
  "type": "Exercise",
  "number": "7.1.6.11",
  "title": "",
  "body": " Suppose that is a vector space, is an inner product space, and that is injective. For , define by , where the right-hand side is the inner product on . Prove that this defines an inner product on .  "
},
{
  "id": "sec-inner-products-8-12",
  "level": "2",
  "url": "sec-inner-products.html#sec-inner-products-8-12",
  "type": "Exercise",
  "number": "7.1.6.12",
  "title": "",
  "body": " Prove properties 1, 3, and 4 of .  "
},
{
  "id": "sec-orthonormal-bases",
  "level": "1",
  "url": "sec-orthonormal-bases.html",
  "type": "Section",
  "number": "7.2",
  "title": "Orthonormal Bases",
  "body": " Orthonormal Bases   While the previous section extended the dot product in to the notion of an inner product in , in this section we focus on bases for a vector space. One remarkably nice feature of the standard basis in is that, with respect to the dot product, it is an orthogonal set in which every vector is a unit vector. In this section we will see that such a basis exists in every inner product space.    Orthonormality  Our first definition is the most important in the section, as we generalize the important characteristics of the standard basis in .    Let be an inner product space, and let be a subset of . Then is an orthonormal set if it is an orthogonal set and for all . If is a basis for , then it is called an orthonormal basis .      The standard basis is an orthonormal basis of either or .      The following is an orthonormal basis of either or : .      For any fixed , the following is an orthonormal basis of or : .      Because of the requirement that each vector be a unit vector, the vectors in an orthonormal basis aren't the prettiest to behold. Here is an orthonormal basis of : .      Consider the following inner product on the space : . The set is an orthonormal basis for . We first verify that this is an orthogonal set: . We can also see that each of these are unit vectors: . Thus, is an orthonormal basis for with this inner product.      Coordinates in Orthonormal Bases  Having an orthonormal basis makes some tasks easier than they would be otherwise. In particular, when we need to find coordinates of vectors with respect to an orthonormal basis, the path is fairly gentle to walk.    Let and be inner product spaces, and let be an orthonormal basis for and be an orthonormal basis for . For every and every , we have and .    For , we have for some since is a basis of . If we take the inner product of both sides of this equation with and use both the linearity of the inner product and the orthonormality of , we have . This means that , which is the same as .  We proceed similarly for the second statement in the theorem. For any , we have . Since , this must also be true for each : . This is the same as .    We can illustrate one part of this theorem with an example.    In with the dot product, we consider the basis from . Then the coordinate vector of with respect to is .    The previous theorem has an important consequence. The inner product of any two vectors in an inner product space is the same as the usual inner product of their coordinate vectors in .    Let be an orthonormal basis for an inner product space . Then, for any vectors , we have and .    By , we have . So, using the properties of the inner product and the orthonormality of , we have .      The Gram-Schmidt Process  Orthonormal bases are quite useful, but they do not appear around every corner. In this section we will describe a reliable process to produce an orthonormal basis of an inner product space.   The Gram-Schmidt Process   This process results in an orthonormal basis for any finite-dimensional inner product space .   Start with a basis of .    Define .    For , define recursively by and .   Then is an orthonormal basis of . Additionally, for each , .     We omit the proof that the Gram-Schmidt process does what it claims to do, as the proof is on the long and technical side. However, it may be helpful for the readers to have a non-technical description of the process. Starting with the original basis, for each vector we strip away the parts of the vector that point in the direction of previous basis vectors. (We understand that direction only makes geometric sense in , but perhaps the reader will allow this use of analogy.) What remains gets normalized to be a unit vector and then added to the growing orthonormal basis.   To get a good handle on this algorithm, we now present some examples.    Consider the vector space with the inner product introduced in . The standard basis for is , but this is not an orthonormal basis. We will apply the Gram-Schmidt process to this basis.  First, we calculate that , so our first vector in the orthonormal basis should be . Then, for the second calculation we need . So, we have . Our final step is to normalize . We find that , meaning that . The reader may want to verify that is indeed an orthonormal set in with this inner product.      We will carry out the Gram-Schmidt process on a basis for where we will use the standard dot product in . Consider the set , where . It is easily checked that is a basis for . Now , so we have . Next, we need for the next calculation: . Since , we have . Finally, we will calculate and . We need these two dot product calculations first: . Then we have . Since , we have . The set is an orthonormal basis of .      In our final example we will consider with the alternative inner product introduced in . We consider a basis for , where . For the Gram-Schmidt process, we first need to calculate . So, we have . Then we need for the next step of the process: . Finally, we normalize in order to get . We find that , so .    While the Gram-Schmidt process has obvious computational implications, it also has some theoretical consequences.    Every finite-dimensional inner product space has an orthonormal basis.    Since we know that every finite-dimensional vector space has a basis ( ), we can apply the Gram-Schmidt process to that basis. This proves that such a always has an orthonormal basis.      Suppose that is an orthonormal set in a finite-dimensional inner product space . Then can be extended to an orthonormal basis of .    By , can be extended to a basis of . We can apply the Gram-Schmidt process to , producing an orthonormal basis of . Since is an orthonormal set, the Gram-Schmidt process will produce vectors such that for , meaning that is a subset of . This justifies the claim that is an extension of .       Define the following inner product on : . (You do not need to prove that this is an inner product.) Let and . Prove or disprove that is an orthonormal basis of . Show your work.     Consider the set of vectors in , where . Using the standard dot product in , use the Gram-Schmidt process on this basis to produce an orthonormal basis for .       Consider the following basis for : .   Use the Gram-Schmidt process to create an orthonormal basis from . (Use the standard dot product on .)    Let . Use to find the coordinate vector of with respect to the orthonormal basis of you created in part (a).       Consider the basis for , where . Consider the inner product on defined by . (You do not need to prove that this is an inner product.)   Use the Gram-Schmidt process to create an orthonormal basis from .    Let . Use to find the coordinate vector of with respect to the orthonormal basis of you created in part (a).       Carry out the Gram-Schmidt process on the following set of vectors in . Use the standard dot product in : .    Consider the standard basis of the vector space . Carry out the Gram-Schmidt process on this basis with respect to the following inner product on : .    Let be the following matrix in : . Consider the inner product on defined by , where the standard dot product is in view on the right side of this equation. Find an orthonormal basis of with respect to this inner product.    Suppose that the matrix of with respect to some basis is upper triangular. Show that if is the orthonormal basis obtained by applying the Gram-Schmidt process to , then is also upper triangular.     "
},
{
  "id": "def-orthonormal",
  "level": "2",
  "url": "sec-orthonormal-bases.html#def-orthonormal",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "  Let be an inner product space, and let be a subset of . Then is an orthonormal set if it is an orthogonal set and for all . If is a basis for , then it is called an orthonormal basis .   "
},
{
  "id": "subsec-orthonormality-4",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-orthonormality-4",
  "type": "Example",
  "number": "7.2.2",
  "title": "",
  "body": "  The standard basis is an orthonormal basis of either or .   "
},
{
  "id": "examp-onb1",
  "level": "2",
  "url": "sec-orthonormal-bases.html#examp-onb1",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  The following is an orthonormal basis of either or : .   "
},
{
  "id": "subsec-orthonormality-6",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-orthonormality-6",
  "type": "Example",
  "number": "7.2.4",
  "title": "",
  "body": "  For any fixed , the following is an orthonormal basis of or : .   "
},
{
  "id": "subsec-orthonormality-7",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-orthonormality-7",
  "type": "Example",
  "number": "7.2.5",
  "title": "",
  "body": "  Because of the requirement that each vector be a unit vector, the vectors in an orthonormal basis aren't the prettiest to behold. Here is an orthonormal basis of : .   "
},
{
  "id": "examp-p1-onb",
  "level": "2",
  "url": "sec-orthonormal-bases.html#examp-p1-onb",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": "  Consider the following inner product on the space : . The set is an orthonormal basis for . We first verify that this is an orthogonal set: . We can also see that each of these are unit vectors: . Thus, is an orthonormal basis for with this inner product.   "
},
{
  "id": "thm-coords-orthonorm-basis",
  "level": "2",
  "url": "sec-orthonormal-bases.html#thm-coords-orthonorm-basis",
  "type": "Theorem",
  "number": "7.2.7",
  "title": "",
  "body": "  Let and be inner product spaces, and let be an orthonormal basis for and be an orthonormal basis for . For every and every , we have and .    For , we have for some since is a basis of . If we take the inner product of both sides of this equation with and use both the linearity of the inner product and the orthonormality of , we have . This means that , which is the same as .  We proceed similarly for the second statement in the theorem. For any , we have . Since , this must also be true for each : . This is the same as .   "
},
{
  "id": "subsec-orthonormal-coordinates-5",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-orthonormal-coordinates-5",
  "type": "Example",
  "number": "7.2.8",
  "title": "",
  "body": "  In with the dot product, we consider the basis from . Then the coordinate vector of with respect to is .   "
},
{
  "id": "thm-ip-coords",
  "level": "2",
  "url": "sec-orthonormal-bases.html#thm-ip-coords",
  "type": "Theorem",
  "number": "7.2.9",
  "title": "",
  "body": "  Let be an orthonormal basis for an inner product space . Then, for any vectors , we have and .    By , we have . So, using the properties of the inner product and the orthonormality of , we have .   "
},
{
  "id": "alg-gram-schmidt",
  "level": "2",
  "url": "sec-orthonormal-bases.html#alg-gram-schmidt",
  "type": "Algorithm",
  "number": "7.2.10",
  "title": "The Gram-Schmidt Process.",
  "body": " The Gram-Schmidt Process   This process results in an orthonormal basis for any finite-dimensional inner product space .   Start with a basis of .    Define .    For , define recursively by and .   Then is an orthonormal basis of . Additionally, for each , .   "
},
{
  "id": "subsec-gram-schmidt-4",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-gram-schmidt-4",
  "type": "Note",
  "number": "7.2.11",
  "title": "",
  "body": " We omit the proof that the Gram-Schmidt process does what it claims to do, as the proof is on the long and technical side. However, it may be helpful for the readers to have a non-technical description of the process. Starting with the original basis, for each vector we strip away the parts of the vector that point in the direction of previous basis vectors. (We understand that direction only makes geometric sense in , but perhaps the reader will allow this use of analogy.) What remains gets normalized to be a unit vector and then added to the growing orthonormal basis.  "
},
{
  "id": "subsec-gram-schmidt-6",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-gram-schmidt-6",
  "type": "Example",
  "number": "7.2.12",
  "title": "",
  "body": "  Consider the vector space with the inner product introduced in . The standard basis for is , but this is not an orthonormal basis. We will apply the Gram-Schmidt process to this basis.  First, we calculate that , so our first vector in the orthonormal basis should be . Then, for the second calculation we need . So, we have . Our final step is to normalize . We find that , meaning that . The reader may want to verify that is indeed an orthonormal set in with this inner product.   "
},
{
  "id": "subsec-gram-schmidt-7",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-gram-schmidt-7",
  "type": "Example",
  "number": "7.2.13",
  "title": "",
  "body": "  We will carry out the Gram-Schmidt process on a basis for where we will use the standard dot product in . Consider the set , where . It is easily checked that is a basis for . Now , so we have . Next, we need for the next calculation: . Since , we have . Finally, we will calculate and . We need these two dot product calculations first: . Then we have . Since , we have . The set is an orthonormal basis of .   "
},
{
  "id": "subsec-gram-schmidt-8",
  "level": "2",
  "url": "sec-orthonormal-bases.html#subsec-gram-schmidt-8",
  "type": "Example",
  "number": "7.2.14",
  "title": "",
  "body": "  In our final example we will consider with the alternative inner product introduced in . We consider a basis for , where . For the Gram-Schmidt process, we first need to calculate . So, we have . Then we need for the next step of the process: . Finally, we normalize in order to get . We find that , so .   "
},
{
  "id": "cor-exist-orthonormal-basis",
  "level": "2",
  "url": "sec-orthonormal-bases.html#cor-exist-orthonormal-basis",
  "type": "Corollary",
  "number": "7.2.15",
  "title": "",
  "body": "  Every finite-dimensional inner product space has an orthonormal basis.    Since we know that every finite-dimensional vector space has a basis ( ), we can apply the Gram-Schmidt process to that basis. This proves that such a always has an orthonormal basis.   "
},
{
  "id": "cor-extend-to-orthonormal-basis",
  "level": "2",
  "url": "sec-orthonormal-bases.html#cor-extend-to-orthonormal-basis",
  "type": "Corollary",
  "number": "7.2.16",
  "title": "",
  "body": "  Suppose that is an orthonormal set in a finite-dimensional inner product space . Then can be extended to an orthonormal basis of .    By , can be extended to a basis of . We can apply the Gram-Schmidt process to , producing an orthonormal basis of . Since is an orthonormal set, the Gram-Schmidt process will produce vectors such that for , meaning that is a subset of . This justifies the claim that is an extension of .   "
},
{
  "id": "sec-orthonormal-bases-6-1",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-6-1",
  "type": "Reading Question",
  "number": "7.2.4.1",
  "title": "",
  "body": " Define the following inner product on : . (You do not need to prove that this is an inner product.) Let and . Prove or disprove that is an orthonormal basis of . Show your work.   "
},
{
  "id": "sec-orthonormal-bases-6-2",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-6-2",
  "type": "Reading Question",
  "number": "7.2.4.2",
  "title": "",
  "body": " Consider the set of vectors in , where . Using the standard dot product in , use the Gram-Schmidt process on this basis to produce an orthonormal basis for .   "
},
{
  "id": "sec-orthonormal-bases-7-1",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-7-1",
  "type": "Exercise",
  "number": "7.2.5.1",
  "title": "",
  "body": " Consider the following basis for : .   Use the Gram-Schmidt process to create an orthonormal basis from . (Use the standard dot product on .)    Let . Use to find the coordinate vector of with respect to the orthonormal basis of you created in part (a).     "
},
{
  "id": "sec-orthonormal-bases-7-2",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-7-2",
  "type": "Exercise",
  "number": "7.2.5.2",
  "title": "",
  "body": " Consider the basis for , where . Consider the inner product on defined by . (You do not need to prove that this is an inner product.)   Use the Gram-Schmidt process to create an orthonormal basis from .    Let . Use to find the coordinate vector of with respect to the orthonormal basis of you created in part (a).     "
},
{
  "id": "sec-orthonormal-bases-7-3",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-7-3",
  "type": "Exercise",
  "number": "7.2.5.3",
  "title": "",
  "body": " Carry out the Gram-Schmidt process on the following set of vectors in . Use the standard dot product in : .  "
},
{
  "id": "sec-orthonormal-bases-7-4",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-7-4",
  "type": "Exercise",
  "number": "7.2.5.4",
  "title": "",
  "body": " Consider the standard basis of the vector space . Carry out the Gram-Schmidt process on this basis with respect to the following inner product on : .  "
},
{
  "id": "sec-orthonormal-bases-7-5",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-7-5",
  "type": "Exercise",
  "number": "7.2.5.5",
  "title": "",
  "body": " Let be the following matrix in : . Consider the inner product on defined by , where the standard dot product is in view on the right side of this equation. Find an orthonormal basis of with respect to this inner product.  "
},
{
  "id": "sec-orthonormal-bases-7-6",
  "level": "2",
  "url": "sec-orthonormal-bases.html#sec-orthonormal-bases-7-6",
  "type": "Exercise",
  "number": "7.2.5.6",
  "title": "",
  "body": " Suppose that the matrix of with respect to some basis is upper triangular. Show that if is the orthonormal basis obtained by applying the Gram-Schmidt process to , then is also upper triangular.   "
},
{
  "id": "sec-orthogonal-projections",
  "level": "1",
  "url": "sec-orthogonal-projections.html",
  "type": "Section",
  "number": "7.3",
  "title": "Orthogonal Projections",
  "body": " Orthogonal Projections   An inner product provides the tool to decompose vectors into useful components. We have already seen this in , but in this section we will expand our discussion. The process of orthogonal projection opens the door to many useful applications.    Orthogonal Complements  In an inner product space, we can collect all vectors orthogonal to any given set of vectors. In particular, we can do this with a subspace.    Let be a subspace of an inner product space . Then the orthogonal complement of , denoted , is defined as .    It is relatively easy to verify that is itself a subspace of . We will leave that proof as an exercise.    If is a subspace of an inner product space , then is also a subspace of .    The easiest examples of orthogonal complements to visualize are in and . If is a line through the origin in , then is the line perpendicular to which passes through the origin. If is a plane through the origin in , then is the line through the origin which is perpendicular to .  In an inner product space, any vector can be uniquely decomposed with reference to a subspace and its orthogonal complement.    Let be an inner product space and let be a finite-dimensional subspace of . Then every vector can be uniquely written in the form , where and .    Since is finite-dimensional, there is an orthonormal basis for , . For any , we define by , and we let . Then we have and . For each , we have , so . Since is orthogonal to each element of the orthonormal basis of , we have .  We now need to prove that and are unique. Suppose that and such that . We consider the vector , . Since and are subspaces, we have and , which means that . This means that , so that and .       Orthogonal Projections  Once we have the sort of decomposition that provides, we can properly talk about orthogonal projections.    Let be a subspace of an inner product space . The orthogonal projection onto is the function given by , where for and .    Orthogonal projection has some important properties which we now collect in the following theorem.    Let be a finite-dimensional subspace of an inner product space .   The function is a linear transformation.    If is an orthonormal basis of , then for each .    For each , .    For each , .    If is an orthonormal basis for , and an orthonormal basis of (with ), then is a diagonal matrix with the first diagonal entries being 1 and the remaining diagonal entries being 0.    We have and for all .    We have .    If is finite-dimensional, then .    We have .       We prove property 1. Let , so we can write and , for and . Then , which tells us that . We now let and . We write , with and . We note that and since and are subspaces. Then . This proves that is a linear transformation.  We will also prove property 3. Let and write , with and . Then .  We leave the proof of the other properties to the exercises.    We can use part of this theorem to describe the matrix of explicitly.    Let be a subspace of or with orthonormal basis . Then the matrix of with respect to the standard basis is , where denotes the conjugate transpose of a matrix.    This fact follows from part 2 of and the fact that the standard inner product in can be written as , where the operation on the right side of the equals sign is matrix multiplication.    Lest this endeavor become purely speculative, we now carry out an example.    We consider the plane through the origin in defined by . This is a subspace of , let's call it , and we can identify the following basis: . We use the Gram-Schmidt process on this basis to produce this orthonormal basis of : . Using this orthonormal basis of , we can write the matrix of with respect to the standard basis. We have .  To finish this example, we will decompose a specific vector into the pieces specified by . Let . We note that . Now we calculate : . Then , so . This completes the decomposition .     depended on having an orthonormal basis for the subspace . We can always find such a basis through the Gram-Schmidt process, but there is an alternative way to produce the matrix for orthogonal projection.    Let be a subspace of or with basis . Let be the matrix with columns . Then .    We note that is an element of , so it can be written as a linear combination of the columns of . In other words, there is a vector which satisfies . By part 3 of , . Specifically, we have for each . If we rewrite these equations in matrix form, we have or . If is invertible, then we can multiply both sides of this equation by , and we get . This completes the proof, since .  In the last paragraph we assumed that was invertible, so we now prove that fact. We can do this by proving that the null space of is trivial. Suppose that , so we have . But since the columns of are linearly independent (they are basis vectors for ), must have rank . By the Rank-Nullity Theorem ( ), this means that , and since means , we must have . This proves that is invertible.    In the following theorem we capture two important geometric properties of orthogonal projections.    Let be a finite-dimensional subspace of an inner product space .   For each , , with equality if and only if .    For each and each , we have , with equality if and only if .       Since by part 3 of , is orthogonal to , so, using we have . Equality holds here if and only if , which is true if and only if . This only happens if .  We now prove the second part of the theorem. We know that and that , so . We have equality here if and only if , which happens if and only if ; that is, if and only if .     This theorem says that, first, orthogonal projections result in a shorter vector. That is, orthogonal projection is a type of contraction . Secondly, is the closest vector in to the vector .   Finding the closest vector to in a subspace can be thought of as giving the best approximation of by elements of . This leads to our application of least squares approximation.    Least Squares Approximation  We consider a set of points in ; in practice, these are usually the result of data collection, perhaps a sample of two numeric variables from a population. A graph of such points is called a scatterplot , and we often want to find the line of best fit for these data. There are many ways to measure best fit, and our method here will be the least squares linear regression technique.  Define a subspace of in the following way, where the in the definition are the -coordinates of the data: . If we let denote the vector where each entry is 1, then , where is the vector of all of the first coordinates in our data set.  The points all lie on a single line if and only if the vector of second coordinates of our data lies in . This does not happen often, as is only a two-dimensional subspace of . So, we want to find the closest point in to by , we can find this through orthogonal projection. When we find , the and will give us our equation of the regression line.  This is called a least squares regression, because minimizing the distance from to involves minimizing a distance. This distance in , when using the dot product, looks like a sum of squares.    Consider the following set of five points in : . Our subspace is spanned by and , where is the vector of first coordinates . We form the matrix with columns and . Then, by , we have , where is the vector of the -coordinates of our data.  We calculate the following: . Now, we don't actually want , because that is a vector in . We want to know the coefficients and in the linear combination of the column vectors of which produce . In other words, we want the vector . Since , this means that and . We can see that this is a believable solution by looking at the graph below which contains the five points as well as the line .            Let be the line in .   Calculate an orthonormal basis for . (We are considering with the usual dot product.)     Let . Using part 2 of , calculate .        Repeat the previous reading question if the inner product on is .       Let be the line in . Write the vector as the sum of a vector in and a vector in . (Use the standard dot product as the inner product in .)    Let , where .   Find the matrix . (Use the standard dot product as the inner product in .)    Using your work from part (a), find the vector in which is closest to , if .       Let be a subspace of an inner product space . Prove that is a subspace of .    Let be an matrix. Prove that .     Consider the following inner product on : . Let . If , write as the sum of a vector in and a vector in .    Consider the following four points in : . Find the least-squares regression line for these points.     "
},
{
  "id": "def-orthog-complement",
  "level": "2",
  "url": "sec-orthogonal-projections.html#def-orthog-complement",
  "type": "Definition",
  "number": "7.3.1",
  "title": "",
  "body": "  Let be a subspace of an inner product space . Then the orthogonal complement of , denoted , is defined as .   "
},
{
  "id": "prop-orthog-comp-subspace",
  "level": "2",
  "url": "sec-orthogonal-projections.html#prop-orthog-comp-subspace",
  "type": "Proposition",
  "number": "7.3.2",
  "title": "",
  "body": "  If is a subspace of an inner product space , then is also a subspace of .   "
},
{
  "id": "thm-decomp-orthog-comp",
  "level": "2",
  "url": "sec-orthogonal-projections.html#thm-decomp-orthog-comp",
  "type": "Theorem",
  "number": "7.3.3",
  "title": "",
  "body": "  Let be an inner product space and let be a finite-dimensional subspace of . Then every vector can be uniquely written in the form , where and .    Since is finite-dimensional, there is an orthonormal basis for , . For any , we define by , and we let . Then we have and . For each , we have , so . Since is orthogonal to each element of the orthonormal basis of , we have .  We now need to prove that and are unique. Suppose that and such that . We consider the vector , . Since and are subspaces, we have and , which means that . This means that , so that and .   "
},
{
  "id": "def-orthog-proj",
  "level": "2",
  "url": "sec-orthogonal-projections.html#def-orthog-proj",
  "type": "Definition",
  "number": "7.3.4",
  "title": "",
  "body": "  Let be a subspace of an inner product space . The orthogonal projection onto is the function given by , where for and .   "
},
{
  "id": "thm-alg-props-orthog-proj",
  "level": "2",
  "url": "sec-orthogonal-projections.html#thm-alg-props-orthog-proj",
  "type": "Theorem",
  "number": "7.3.5",
  "title": "",
  "body": "  Let be a finite-dimensional subspace of an inner product space .   The function is a linear transformation.    If is an orthonormal basis of , then for each .    For each , .    For each , .    If is an orthonormal basis for , and an orthonormal basis of (with ), then is a diagonal matrix with the first diagonal entries being 1 and the remaining diagonal entries being 0.    We have and for all .    We have .    If is finite-dimensional, then .    We have .       We prove property 1. Let , so we can write and , for and . Then , which tells us that . We now let and . We write , with and . We note that and since and are subspaces. Then . This proves that is a linear transformation.  We will also prove property 3. Let and write , with and . Then .  We leave the proof of the other properties to the exercises.   "
},
{
  "id": "prop-matrix-of-proj-1",
  "level": "2",
  "url": "sec-orthogonal-projections.html#prop-matrix-of-proj-1",
  "type": "Proposition",
  "number": "7.3.6",
  "title": "",
  "body": "  Let be a subspace of or with orthonormal basis . Then the matrix of with respect to the standard basis is , where denotes the conjugate transpose of a matrix.    This fact follows from part 2 of and the fact that the standard inner product in can be written as , where the operation on the right side of the equals sign is matrix multiplication.   "
},
{
  "id": "subsec-orthog-proj-9",
  "level": "2",
  "url": "sec-orthogonal-projections.html#subsec-orthog-proj-9",
  "type": "Example",
  "number": "7.3.7",
  "title": "",
  "body": "  We consider the plane through the origin in defined by . This is a subspace of , let's call it , and we can identify the following basis: . We use the Gram-Schmidt process on this basis to produce this orthonormal basis of : . Using this orthonormal basis of , we can write the matrix of with respect to the standard basis. We have .  To finish this example, we will decompose a specific vector into the pieces specified by . Let . We note that . Now we calculate : . Then , so . This completes the decomposition .   "
},
{
  "id": "prop-matrix-of-proj-2",
  "level": "2",
  "url": "sec-orthogonal-projections.html#prop-matrix-of-proj-2",
  "type": "Proposition",
  "number": "7.3.8",
  "title": "",
  "body": "  Let be a subspace of or with basis . Let be the matrix with columns . Then .    We note that is an element of , so it can be written as a linear combination of the columns of . In other words, there is a vector which satisfies . By part 3 of , . Specifically, we have for each . If we rewrite these equations in matrix form, we have or . If is invertible, then we can multiply both sides of this equation by , and we get . This completes the proof, since .  In the last paragraph we assumed that was invertible, so we now prove that fact. We can do this by proving that the null space of is trivial. Suppose that , so we have . But since the columns of are linearly independent (they are basis vectors for ), must have rank . By the Rank-Nullity Theorem ( ), this means that , and since means , we must have . This proves that is invertible.   "
},
{
  "id": "thm-geom-props-orthog-projs",
  "level": "2",
  "url": "sec-orthogonal-projections.html#thm-geom-props-orthog-projs",
  "type": "Theorem",
  "number": "7.3.9",
  "title": "",
  "body": "  Let be a finite-dimensional subspace of an inner product space .   For each , , with equality if and only if .    For each and each , we have , with equality if and only if .       Since by part 3 of , is orthogonal to , so, using we have . Equality holds here if and only if , which is true if and only if . This only happens if .  We now prove the second part of the theorem. We know that and that , so . We have equality here if and only if , which happens if and only if ; that is, if and only if .   "
},
{
  "id": "subsec-orthog-proj-14",
  "level": "2",
  "url": "sec-orthogonal-projections.html#subsec-orthog-proj-14",
  "type": "Note",
  "number": "7.3.10",
  "title": "",
  "body": " This theorem says that, first, orthogonal projections result in a shorter vector. That is, orthogonal projection is a type of contraction . Secondly, is the closest vector in to the vector .  "
},
{
  "id": "subsec-least-squares-6",
  "level": "2",
  "url": "sec-orthogonal-projections.html#subsec-least-squares-6",
  "type": "Example",
  "number": "7.3.11",
  "title": "",
  "body": "  Consider the following set of five points in : . Our subspace is spanned by and , where is the vector of first coordinates . We form the matrix with columns and . Then, by , we have , where is the vector of the -coordinates of our data.  We calculate the following: . Now, we don't actually want , because that is a vector in . We want to know the coefficients and in the linear combination of the column vectors of which produce . In other words, we want the vector . Since , this means that and . We can see that this is a believable solution by looking at the graph below which contains the five points as well as the line .        "
},
{
  "id": "sec-orthogonal-projections-6-1",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-6-1",
  "type": "Reading Question",
  "number": "7.3.4.1",
  "title": "",
  "body": " Let be the line in .   Calculate an orthonormal basis for . (We are considering with the usual dot product.)     Let . Using part 2 of , calculate .      "
},
{
  "id": "sec-orthogonal-projections-6-2",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-6-2",
  "type": "Reading Question",
  "number": "7.3.4.2",
  "title": "",
  "body": " Repeat the previous reading question if the inner product on is .   "
},
{
  "id": "sec-orthogonal-projections-7-1",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-7-1",
  "type": "Exercise",
  "number": "7.3.5.1",
  "title": "",
  "body": " Let be the line in . Write the vector as the sum of a vector in and a vector in . (Use the standard dot product as the inner product in .)  "
},
{
  "id": "sec-orthogonal-projections-7-2",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-7-2",
  "type": "Exercise",
  "number": "7.3.5.2",
  "title": "",
  "body": " Let , where .   Find the matrix . (Use the standard dot product as the inner product in .)    Using your work from part (a), find the vector in which is closest to , if .     "
},
{
  "id": "sec-orthogonal-projections-7-3",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-7-3",
  "type": "Exercise",
  "number": "7.3.5.3",
  "title": "",
  "body": " Let be a subspace of an inner product space . Prove that is a subspace of .  "
},
{
  "id": "sec-orthogonal-projections-7-4",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-7-4",
  "type": "Exercise",
  "number": "7.3.5.4",
  "title": "",
  "body": " Let be an matrix. Prove that .   "
},
{
  "id": "sec-orthogonal-projections-7-5",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-7-5",
  "type": "Exercise",
  "number": "7.3.5.5",
  "title": "",
  "body": " Consider the following inner product on : . Let . If , write as the sum of a vector in and a vector in .  "
},
{
  "id": "sec-orthogonal-projections-7-6",
  "level": "2",
  "url": "sec-orthogonal-projections.html#sec-orthogonal-projections-7-6",
  "type": "Exercise",
  "number": "7.3.5.6",
  "title": "",
  "body": " Consider the following four points in : . Find the least-squares regression line for these points.   "
},
{
  "id": "apdx-mod-arith",
  "level": "1",
  "url": "apdx-mod-arith.html",
  "type": "Appendix",
  "number": "A",
  "title": "The Integers Modulo <span class=\"process-math\">\\(n\\)<\/span>",
  "body": " The Integers Modulo  In this short appendix we will define modular arithmetic. There are other books and sources that develop these ideas in a more thorough, formal manner. However, we are primarily aiming for a streamlined approach that will serve our discussion of finite fields in .  The Division Algorithm is essential to what follows.   The Division Algorithm   Let be an integer and let be a positive integer. Then there exist unique integers and for which , and .    In this statement of the Division Algorithm, the reader should think of dividing by , where is the quotient and is the remainder. For example, captures the information that dividing by leaves a remainder of . Similarly, the equation tells us that dividing by gives a remainder of . It is crucial for uniqueness in the Division Algorithm that we insist the remainder is in the specified range. (In other words, it is not appropriate to write as an application of the Division Algorithm to and .)  The Division Algorithm provides a necessary link between the definition of congruence and what follows.    Let and be integers and let be a natural number. Then we say that and are congruent modulo if . We write this as .      Let and be integers and let be a natural number. Then if and only if and have the same remainder when divided by .    We now define a relation on . Let be a natural number. If and are integers, then we say that is related to when . ( gives us an intuitive way to understand this relation two integers are related if they have the same remainder when divided by .) It is a good (and not terribly difficult) exercise to show that this is an equivalence relation on . For an integer , we will use the notation to denote the equivalence class of under this relation.    Let . Then the equivalence classes of the congruence mod equivalence relation are . The integers modulo is the set . Addition and multiplication can be defined on this set in the following way. For any , .    It takes a little bit of work (but not too much!) to show that these operations are well-defined.  When performing calculations in , we will prefer to use one of the numbers as the equivalence class representative. For example, though it is correct to write in , we will prefer to write . (Note that knowing the integer is essential in these calculations!)    Let's carry out some basic arithmetic within .                               At this point the reader may see that, for each , is its own mathematical universe, just like or , with its own calculations and quirks. In particular, it is illuminating to think about what properties of addition and multiplication shares with . (Also: In which cases does the value of affect whether or not these properties hold?)  While the full impact of those questions is best pursued in an abstract algebra class, one question has immediate relevance for our current subject: For which do all nonzero elements in have multiplicative inverses?  In we carried out calculations in , so let's examine that set again. Importantly, the element is the multiplicative identity in , meaning that multiplying each by leaves unchanged. By multiplying every element in by , we can see that is never the result. This shows that has no multiplicative inverse in . Further, it is illuminating to note that the elements , , , and have multiplicative inverses in while the elements , , and do not. However, the issue is deeper than the parity of the elements of the equivalence class; the key ingredient is relative primeness with .  We hope this discussion makes the following theorem believable.    The set has the property that all nonzero elements have a multiplicative inverse if and only if is prime.    In the context of , leads to the result that is a field if and only if is prime. In this case, we will use the notation in place of . We will also often drop the square-bracket notation and, for example, refer to instead of as an element of .  "
},
{
  "id": "thm-div-alg",
  "level": "2",
  "url": "apdx-mod-arith.html#thm-div-alg",
  "type": "Theorem",
  "number": "A.0.1",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Let be an integer and let be a positive integer. Then there exist unique integers and for which , and .   "
},
{
  "id": "def-congruence",
  "level": "2",
  "url": "apdx-mod-arith.html#def-congruence",
  "type": "Definition",
  "number": "A.0.2",
  "title": "",
  "body": "  Let and be integers and let be a natural number. Then we say that and are congruent modulo if . We write this as .   "
},
{
  "id": "prop-congruence-remainder",
  "level": "2",
  "url": "apdx-mod-arith.html#prop-congruence-remainder",
  "type": "Proposition",
  "number": "A.0.3",
  "title": "",
  "body": "  Let and be integers and let be a natural number. Then if and only if and have the same remainder when divided by .   "
},
{
  "id": "def-integers-mod-n",
  "level": "2",
  "url": "apdx-mod-arith.html#def-integers-mod-n",
  "type": "Definition",
  "number": "A.0.4",
  "title": "",
  "body": "  Let . Then the equivalence classes of the congruence mod equivalence relation are . The integers modulo is the set . Addition and multiplication can be defined on this set in the following way. For any , .   "
},
{
  "id": "exam-mod-n-calcs",
  "level": "2",
  "url": "apdx-mod-arith.html#exam-mod-n-calcs",
  "type": "Example",
  "number": "A.0.5",
  "title": "",
  "body": "  Let's carry out some basic arithmetic within .                              "
},
{
  "id": "thm-field-n-prime",
  "level": "2",
  "url": "apdx-mod-arith.html#thm-field-n-prime",
  "type": "Theorem",
  "number": "A.0.6",
  "title": "",
  "body": "  The set has the property that all nonzero elements have a multiplicative inverse if and only if is prime.   "
},
{
  "id": "apdx-isomorphisms",
  "level": "1",
  "url": "apdx-isomorphisms.html",
  "type": "Appendix",
  "number": "B",
  "title": "Isomorphisms",
  "body": " Isomorphisms  We have arrived at a point in the book where I am noticing material that should have been included earlier. In a future edition of the book, this will appear in earlier chapters\/sections, but for this edition I need to stick it in this appendix. Apologies!  Bijective functions are important in almost all settings, and the linear algebra setting is no exception. We have a specific name for bijective linear transformations.    A bijective linear transformation between vector spaces and is called an isomorphism . If there exists an isomorphism between vector spaces and , then these spaces are said to be isomorphic .    The reader should think of isomorphic vector spaces as essentially the same . Such spaces will not be exactly the same, of course, in the same way that two finite sets of the same size are not necessarily identical. But the presence of an isomorphism means that the vector space operations are compatible in such a way that such spaces share many of the same properties.   If and are vector spaces, then the set of all linear transformations from is denoted . When , we will write instead of .   In this next proposition, note that we will be referring to .    Let and be vector spaces over , and let . Then is an isomorphism if and only if is invertible.    This fact is true for functions without any of the linear transformation properties being involved. (A function is bijective if and only if it has an inverse.)      If is invertible, then is also a linear transformation.    We will check the two properties of a linear transformation. Suppose that . Since , we have . When we apply to the beginning and end of this equality, using , we get .  We will now check the scalar multiple property in a similar fashion. Let and let . Then we have . Applying to both sides again we get . This proves that .    The following results require background from .    Suppose that is a basis for a vector space . Let be a subset of a vector space . Then there is a unique linear transformation such that for each , .    Given , there exists a unique linear combination by . We define the function by . This gives for each , so we only need to show that is a linear transformation.  Suppose that with . Then we have . Now we let and . Then, if , we have .  We finally need to justify the claim that is unique. Suppose that with for each . Then, if with , we have . This shows that for every , so and is unique.      Let and let be a basis for . Then is an isomorphism if and only if is a basis for .    We first suppose that is an isomorphism. We want to show that is a basis for , so we begin with linear independence. Suppose that such that . Then we have . Since is injective, by we must have . But since is a linearly independent set, we have for all . This proves that is linearly independent.  We now prove that spans . Let . Since is surjective, there exists such that . Since is a basis for , we have . Then . This proves that , so is a basis for .  We now need to prove the other implication, and we assume that is a basis for . We need to show that is an isomorphism. To show that is injective, suppose that such that . We have , so . But since is a linearly independent set by assumption, this implies that for all . This means that , so is injective.  To prove that is surjective, we assume that . Since spans , we have for some . We claim that if , then . Here is the justification: . This proves that is surjective and is thus an isomorphism.    "
},
{
  "id": "def-isomorphism",
  "level": "2",
  "url": "apdx-isomorphisms.html#def-isomorphism",
  "type": "Definition",
  "number": "B.0.1",
  "title": "",
  "body": "  A bijective linear transformation between vector spaces and is called an isomorphism . If there exists an isomorphism between vector spaces and , then these spaces are said to be isomorphic .   "
},
{
  "id": "notation-set-lts",
  "level": "2",
  "url": "apdx-isomorphisms.html#notation-set-lts",
  "type": "Note",
  "number": "B.0.2",
  "title": "",
  "body": " If and are vector spaces, then the set of all linear transformations from is denoted . When , we will write instead of .  "
},
{
  "id": "prop-isomorphism-invertible",
  "level": "2",
  "url": "apdx-isomorphisms.html#prop-isomorphism-invertible",
  "type": "Proposition",
  "number": "B.0.3",
  "title": "",
  "body": "  Let and be vector spaces over , and let . Then is an isomorphism if and only if is invertible.    This fact is true for functions without any of the linear transformation properties being involved. (A function is bijective if and only if it has an inverse.)   "
},
{
  "id": "prop-inverse-lt",
  "level": "2",
  "url": "apdx-isomorphisms.html#prop-inverse-lt",
  "type": "Proposition",
  "number": "B.0.4",
  "title": "",
  "body": "  If is invertible, then is also a linear transformation.    We will check the two properties of a linear transformation. Suppose that . Since , we have . When we apply to the beginning and end of this equality, using , we get .  We will now check the scalar multiple property in a similar fashion. Let and let . Then we have . Applying to both sides again we get . This proves that .   "
},
{
  "id": "thm-lt-basis",
  "level": "2",
  "url": "apdx-isomorphisms.html#thm-lt-basis",
  "type": "Theorem",
  "number": "B.0.5",
  "title": "",
  "body": "  Suppose that is a basis for a vector space . Let be a subset of a vector space . Then there is a unique linear transformation such that for each , .    Given , there exists a unique linear combination by . We define the function by . This gives for each , so we only need to show that is a linear transformation.  Suppose that with . Then we have . Now we let and . Then, if , we have .  We finally need to justify the claim that is unique. Suppose that with for each . Then, if with , we have . This shows that for every , so and is unique.   "
},
{
  "id": "thm-isomorphism-basis",
  "level": "2",
  "url": "apdx-isomorphisms.html#thm-isomorphism-basis",
  "type": "Theorem",
  "number": "B.0.6",
  "title": "",
  "body": "  Let and let be a basis for . Then is an isomorphism if and only if is a basis for .    We first suppose that is an isomorphism. We want to show that is a basis for , so we begin with linear independence. Suppose that such that . Then we have . Since is injective, by we must have . But since is a linearly independent set, we have for all . This proves that is linearly independent.  We now prove that spans . Let . Since is surjective, there exists such that . Since is a basis for , we have . Then . This proves that , so is a basis for .  We now need to prove the other implication, and we assume that is a basis for . We need to show that is an isomorphism. To show that is injective, suppose that such that . We have , so . But since is a linearly independent set by assumption, this implies that for all . This means that , so is injective.  To prove that is surjective, we assume that . Since spans , we have for some . We claim that if , then . Here is the justification: . This proves that is surjective and is thus an isomorphism.   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
