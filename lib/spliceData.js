export default function spliceData(data, currentPage, itemsPerPage) {
    // Slice data to current page
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    return currentItems
  }
  