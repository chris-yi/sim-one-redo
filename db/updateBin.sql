update shelves
set name = $2, price = $3
where bin_id = $1;