// Course data
const courses = [
    { name: "Leadership Development", description: "Enhance your leadership skills with our comprehensive training modules.", price: "£99.99 per course" },
    { name: "Project Management", description: "Gain expertise in project management methodologies and tools.", price: "£89.99 per course" },
    { name: "Effective Communication", description: "Improve your verbal and written communication skills.", price: "£69.99 per course" },
    { name: "Time Management", description: "Learn strategies to manage your time efficiently and increase productivity.", price: "£59.99 per course" },
    { name: "Negotiation Skills", description: "Master the art of negotiation to achieve better outcomes in your professional life.", price: "£79.99 per course" },
    { name: "Problem Solving and Critical Thinking", description: "Develop critical thinking skills to solve complex problems effectively.", price: "£74.99 per course" },
    { name: "Emotional Intelligence", description: "Understand and improve your emotional intelligence to enhance workplace relationships.", price: "£64.99 per course" },
    { name: "Networking Strategies", description: "Build and leverage professional networks to advance your career.", price: "£49.99 per course" },
    { name: "Career Coaching", description: "Receive personalized career coaching from industry experts.", price: "£149.99 per session" },
    { name: "Financial Literacy", description: "Learn the essentials of financial management and planning for professionals.", price: "£54.99 per course" },
    { name: "Public Speaking", description: "Overcome public speaking anxiety and improve your presentation skills.", price: "£79.99 per course" },
    { name: "Team Collaboration", description: "Foster effective teamwork and collaboration skills.", price: "£69.99 per course" },
    { name: "Sales and Marketing", description: "Enhance your sales techniques and marketing strategies.", price: "£89.99 per course" },
    { name: "Digital Marketing", description: "Stay updated with the latest digital marketing trends and tools.", price: "£99.99 per course" },
    { name: "Change Management", description: "Learn to manage and lead through organisational changes.", price: "£84.99 per course" }
];

// Function to populate table
function populateTable(coursesToShow) {
    const tableBody = document.getElementById('courseTableBody');
    tableBody.innerHTML = '';
    
    coursesToShow.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.description}</td>
            <td class="price">${course.price}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize the table and search functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initial table population
    populateTable(courses);

    // Search functionality
    const searchInput = document.getElementById('courseSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredCourses = courses.filter(course => 
                course.name.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm)
            );
            populateTable(filteredCourses);
        });
    }
});