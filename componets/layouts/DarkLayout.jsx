
export const DarkLayout = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 5,
            padding: 10,
        }}>
            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>

        </div>
    )
}
