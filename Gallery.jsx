                         submission.participant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.country.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch && submission.qualified // Only show qualified submissions
  })

  const filteredSubmissions = submissions.filter(submission => {
    const matchesCategory = selectedCategory === 'all' || submission.category === selectedCategory
    const matchesSearch = submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.participant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.country.toLowerCase().includes(searchTerm.toLowerCase())
