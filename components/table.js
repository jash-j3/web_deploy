export default function Table({ teamMembers }) {
    return (
        <>
            <div class="relative overflow-x-auto mt-5">
                <table class="w-full text-sm text-left text-gray-300">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-600 dark:text-gray-300">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Designation
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teamMembers.map(teamMember => {
                                return <tr class="border-b border-fuchsia-500 bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                        {teamMember.designation}
                                    </th>
                                    <td class="px-6 py-4">
                                        {teamMember.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {teamMember.contact}
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}