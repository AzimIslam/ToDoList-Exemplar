from django.http import JsonResponse
from .models import ListEntry

import json


# Create your views here.
def addTask(request):
    # Check if request is POST
    if request.method == 'POST':
        data = json.loads(request.body)

        # Get data from the request
        description = data.get('description')
        due_date = data.get('date')

        # Create a new ListEntry object
        new_entry = ListEntry(description=description, due=due_date)
        new_entry.save()

        # Return new entry as JSON
        return JsonResponse(new_entry.to_dict())
    
    # If request is not POST, return error
    else:
        return JsonResponse({'error': 'Invalid request method.'})


def getAllTasks(request):
    # Check if request is GET
    if request.method == 'GET':
        # Get all ListEntry objects
        entries = ListEntry.objects.all()

        # Convert entries to JSON
        entries_json = [entry.to_dict() for entry in entries]

        # Return entries as JSON
        return JsonResponse(entries_json, safe=False)
    # If request is not GET, return error
    else:
        return JsonResponse({'error': 'Invalid request method.'})
    
def deleteTask(request, id):
    # Check if request is DELETE
    if request.method == 'DELETE':
        # Get ListEntry object with id
        entry = ListEntry.objects.get(id=id)

        # Delete entry
        entry.delete()

        # Return success message
        return JsonResponse({'success': True})
    
    # If request is not DELETE, return error
    else:
        return JsonResponse({'error': 'Invalid request method.'})