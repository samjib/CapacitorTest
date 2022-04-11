import { ActionSheet, ActionSheetButton, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function ActionSheetPage() {

    const actions: ActionSheetButton[] = [
        { title: "Action 1" },
        { title: "Action 2" },
        { title: "Action 3", style: ActionSheetButtonStyle.Cancel }
    ];

    return (<div>
        <Button variant='contained' onClick={() => ActionSheet.showActions({
            title: "Test",
            options: actions
        })
            .then(result => alert(`'${actions[result.index].title}' clicked!`))}>Show Action Sheet</Button>
    </div>);
}