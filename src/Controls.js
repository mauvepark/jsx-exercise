function Delete() {
    return (
        <>
            <input type="text"/>
            <button>Delete</button>
        </>
    );
}

function Controls() {
    return (
        <>
            <Delete />
            <button>Sort by Group</button>
            <button>Sort by ID</button>
            <button>Grid/List</button>
        </>
    );
}

export default Controls;