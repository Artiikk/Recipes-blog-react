export default class CookingService {
  data = [
    {
      id: 1,
      title: "SIMPLE MICROWAVE LEMON CURD",
      ingredients: [
        "1 cup granulated sugar",
        "3 eggs (yolks and whites)",
        "1 cup fresh lemon juice (about 4-5 lemons)",
        "zest of 3 lemons",
        "1/2 cup unsalted butter, melted"
      ],
      instructions: [
        "In a large microwave-safe bowl, whisk together the sugar and eggs until smooth and thoroughly combined. Whisk in lemon juice, lemon zest and melted butter.",
        "Cook in the microwave on full power for one minute intervals, stirring after each minute.",
        "Remove from the microwave, push through a fine, mesh sieve and pour into sterile jar or container."
      ],
      coverImage:
        "https://www.mybakingaddiction.com/wp-content/uploads/2015/05/Microwave-Lemon-Curd-Picture.jpg"
    },
    {
      id: 2,
      title: "STRAWBERRY CHEESECAKE FLUFF",
      ingredients: [
        "2 8-ounce packages cream cheese, room temperature",
        "1 1/2 cups powdered sugar",
        "2 teaspoons vanilla extract",
        "2 8-ounce containers frozen whipped topping, thawed",
        "2 16-ounce containers fresh strawberries, washed, hulled and sliced"
      ],
      instructions: [
        "Fold in whipped topping until completely incorporated.",
        "Fold in the strawberries and marshmallows.",
        "Cover and refrigerate for at least 2 hours."
      ],
      coverImage:
        "https://www.mybakingaddiction.com/wp-content/uploads/2018/04/Strawberry-Cheesecake-Fluff-4-of-6.jpg"
    },
    {
      id: 3,
      title: "HOMEMADE FUNFETTI CUPCAKES",
      ingredients: [
        "1/4 cups cake flour (I used Swan’s Down brand)",
        "1 tablespoon baking powder",
        "1/2 teaspoon kosher salt",
        "1 1/4 cups whole milk, room temperature",
        "4 large egg whites, room temperature"
      ],
      instructions: [
        "Center a rack in the oven to 350 degrees F. Line cupcake pan with paper liners.",
        "In a large bowl, sift together the flour, baking powder and salt.",
        "In a medium bowl, whisk together the milk and egg whites.",
        "Bake for 18-24 minutes, or until a toothpick inserted into the centers come out clean. Cool on wire rack."
      ],
      coverImage:
        "https://www.mybakingaddiction.com/wp-content/uploads/2015/02/Funfetti-Cupcakes-8_resized.jpg"
    },
    {
      id: 4,
      title: "CHOCOLATE ZUCCHINI MUFFINS",
      ingredients: [
        "1/2 cup packed light brown sugar",
        "1 cup vegetable oil",
        "3 large eggs",
        "2 teaspoons pure vanilla extract",
        "2 1/2 cups all-purpose flour"
      ],
      instructions: [
        "Preheat oven to 350°F. Spray muffin pan wells with nonstick cooking spray or line with paper liners.",
        "In a large bowl with an electric mixer, beat together the sugars, oil, eggs, and vanilla until thoroughly combined.",
        "In a medium bowl, whisk together the flour, cocoa powder, salt, baking soda, and cinnamon."
      ],
      coverImage:
        "https://www.mybakingaddiction.com/wp-content/uploads/2015/09/Chocolate-Zucchini-Muffins-8_resized.jpg"
    },
    {
      id: 5,
      title: "MORNING GLORY MUFFINS",
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "2 teaspoons ground cinnamon",
        "2 teaspoons baking soda",
        "1 8-ounce can crushed pineapple, drained",
        "1/3 pecans; coarsely chopped"
      ],
      instructions: [
        "Preheat oven to 350° F. Grease or line a muffin tins with paper liners.",
        "In a large bowl, combine flours, sugar, cinnamon, nutmeg, baking soda and kosher salt. Whisk the dry ingredients until thoroughly combined.",
        "Combine wet and dry ingredients and mix until thoroughly combined, but do not overmix.",
        "Allow muffins to cool in the pan for about 5 minutes before removing to a wire rack."
      ],
      coverImage:
        "https://www.mybakingaddiction.com/wp-content/uploads/2017/09/Morning-Glory-Muffins-Pic.jpg"
    },
    {
      id: 6,
      title: "CINNAMON SUGAR SOFT PRETZEL BITES",
      ingredients: [
        "4 to 4-1/2 cups all-purpose flour",
        "2 tablespoons granulated sugar",
        "6 tablespoons salted butter, melted",
        "4 ounces cream cheese, softened",
        "1 teaspoon vanilla extract"
      ],
      instructions: [
        "Combine 2 cups flour, sugar, undissolved yeast, and salt in a large bowl. Heat milk, water, and oil until very warm (120° to 130°F); stir into flour mixture.",
        "Divide into 6 equal pieces. Roll each piece into a 16-inch rope. Cover; let rest for 5 to 10 minutes until risen slightly.",
        "Preheat oven to 425°F. Line 2 baking sheets with parchment paper.",
      ],
      coverImage:
        "https://www.mybakingaddiction.com/wp-content/uploads/2018/01/Cinnamon-Sugar-Soft-Pretzel-Bites-Pic.jpg"
    },
  ];

  getFood() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        // reject(new Error('Smth bad was happened'));
      }, 500);
    });
  }
}
