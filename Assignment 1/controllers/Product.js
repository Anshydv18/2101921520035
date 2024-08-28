const topProducts = async(req,res)=>{
    try {
    const queryObject = url.parse(req.url, true).query;
    const { top, minPrice, maxPrice } = queryObject;
    const { companyname, categoryname } = req.params;

    // Pagination logic
    const page = parseInt(queryObject.page) || 1;
    const limit = parseInt(queryObject.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Mock data for demonstration
    const products = [
        // Array of product objects
    ];

    const paginatedProducts = products.slice(startIndex, endIndex);

    res.json({
        companyname,
        categoryname,
        top,
        minPrice,
        maxPrice,
        page,
        limit,
        totalProducts: products.length,
        products: paginatedProducts
    });



    } catch (error) {
        
    }
}