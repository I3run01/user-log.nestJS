type CreateUserDto = {
    name: string | null
    email: string
    password: string
    status: 'Active' | 'Pending'
}

export default CreateUserDto
