UPDATE sim_one_products set(product_name, price, image_url) = ($1, $2, $3)
WHERE product_id = $4;
SELECT * FROM sim_one_products
