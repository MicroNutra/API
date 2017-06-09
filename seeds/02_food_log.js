exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_log').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_log').insert([
        {
            user_id: '10213378191999196',
            food_name: 'chicken',
            quantity: '3',
            size: 'medium',
        },
        {
            user_id: '10213378191999196',
            food_name: 'spinach',
            quantity: '1',
            size: 'large',
        }

      ]);

    });
};
