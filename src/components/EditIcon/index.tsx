import { FiEdit } from "@react-icons/all-files/fi/FiEdit"

interface EditUserProps {
    onOpenEditUserModal: () => void
}

export const EditIcon = ({ onOpenEditUserModal }: EditUserProps) => {
    return (
        <FiEdit size={23}
            color="#2ad59f"
            onClick={onOpenEditUserModal}
        />
    )
}